import EventForm from '@/components/shared/EventForm'
import { getEventById } from '@/lib/actions/event.action'
import { auth } from '@clerk/nextjs'
import React from 'react'

interface UpdateEventProps {
    params: {
        id: string
    }
}


const page = async ({ params: { id } }: UpdateEventProps) => {

    // const { sessionClaims } = auth()
    // const userId = sessionClaims?.userId as string

    const userId = '660fa565f08b14031cc1dafd'

    const event = await getEventById(id)

    return (
        <>
            <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
                <h3 className='wrapper h3-bold text-center sm:text-left'>
                    Update Event
                </h3>
            </section>

            <div className='wrapper my-8'>
                <EventForm
                    type={'Update'}
                    userId={userId}
                    event={event}
                    eventId={event._id}
                />
            </div>
        </>
    )
}

export default page