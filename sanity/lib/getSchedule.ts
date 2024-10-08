import { unstable_cache } from "next/cache"
import { client } from "./client"
import groq from "groq"

const getSchedule = unstable_cache(
	async (): Promise<Schedule[]> => {
		const query = groq`*[_type == "schedule"]{
      date,
      "sessions": sessions[]{
        _id,
        start,
        end,
        course,
        description,
        icon
      }
    }`

		const daysOfWeek: Record<string, number> = {
			Lundi: 1,
			Mardi: 2,
			Mercredi: 3,
			Jeudi: 4,
			Vendredi: 5,
			Samedi: 6,
			Dimanche: 7,
		}

		const schedule: Schedule[] = await client.fetch(query)

		const scheduleWithDuration = schedule.map((schedule) => ({
			...schedule,
			sessions: schedule.sessions.map((session) => {
				if (!session.start || !session.end) {
					// If start or end do not exist, return the session without duration.
					return {
						...session,
						duration: "0",
					}
				}

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

		// Sort schedule by day of the week
		scheduleWithDuration.sort((a, b) => {
			return daysOfWeek[a.date] - daysOfWeek[b.date]
		})

		return scheduleWithDuration
	},
	["schedule"],
	{ tags: ["home"] }
)

export default getSchedule
