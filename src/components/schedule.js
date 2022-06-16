import React from 'react'
import Speaker from './speaker'
import { DateTime } from 'luxon'

const timeFmt1 = 'h:mm a'
const timeFmt2 = 'H:mm'

const Schedule = ({ track, schedule }) => {
  return (
    <dl className="divide-y divide-secondary-400">
      {schedule
        .filter((event) => event.track === null || event.track === track)
        .map((event) => (
          <div
            key={`${track}-${event.session_name}`}
            className="flex flex-row divide-x divide-secondary-400"
          >
            <dt className="shrink-0 self-center w-[12ch] p-4">
              {event.local_time}
            </dt>
            <dd className="p-4">
              <span className="font-headings font-bold md:text-lg">
                {event.session_name}{' '}
              </span>
              <span className="block divide-x divide-primary-700">
                {event?.speakers?.map((speaker) => (
                  <Speaker
                    key={speaker.id}
                    id={speaker.id}
                    link="true"
                    className="px-2 first:pl-0"
                  />
                ))}
              </span>
            </dd>
          </div>
        ))}
    </dl>
  )
}

export default Schedule
