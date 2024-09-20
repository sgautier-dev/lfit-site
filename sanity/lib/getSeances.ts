import { unstable_cache } from "next/cache"
import { client } from "./client"
import groq from "groq"

const getSeances = unstable_cache(
	async (): Promise<Seance | Empty> => {
		const query = groq`*[_type == "seances"]{
		title,
    	presentation,
		"backgroundImage": backgroundImage.asset->url,
      schedule[]->{date,
      "sessions": sessions[]{
        _id,
        start,
        end,
        course,
        description,
        icon
      }}
    }[0]`

		const daysOfWeek: Record<string, number> = {
			Lundi: 1,
			Mardi: 2,
			Mercredi: 3,
			Jeudi: 4,
			Vendredi: 5,
			Samedi: 6,
			Dimanche: 7,
		}

		const data: Seance = await client.fetch(query)

		if (!data.schedule || data.schedule.length === 0) {
			return { empty: true }
		}

		const schedulesWithDuration = data.schedule.map((schedule) => ({
			...schedule,
			sessions: schedule.sessions.map((session) => {
				const [startHour, startMinute] = session.start.split(":").map(Number)
				const [endHour, endMinute] = session.end.split(":").map(Number)

				const durationMinutes =
					(endHour - startHour) * 60 + (endMinute - startMinute)

				return {
					...session,
					duration: durationMinutes.toString(),
				}
			}),
		}))

		// Sort schedules by day of the week
		schedulesWithDuration.sort((a, b) => {
			return daysOfWeek[a.date] - daysOfWeek[b.date]
		})

		const seanceWithDuration: Seance = {
			...data,
			schedule: schedulesWithDuration,
		}

		return seanceWithDuration
	},
	["seances"],
	{ tags: ["home"] }
)

export default getSeances
