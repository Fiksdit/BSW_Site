"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Plus, X, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CalendarEvent {
  id: string
  date: Date
  title: string
  time?: string
}

interface EditableCalendarProps {
  className?: string
}

export function EditableCalendar({ className }: EditableCalendarProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    new Date()
  )
  const [events, setEvents] = React.useState<CalendarEvent[]>([
    {
      id: "1",
      date: new Date(),
      title: "Strategy Review",
      time: "10:00 AM",
    },
    {
      id: "2",
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      title: "Client Meeting",
      time: "2:00 PM",
    },
    {
      id: "3",
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      title: "Team Workshop",
      time: "9:00 AM",
    },
  ])
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const [newEventTitle, setNewEventTitle] = React.useState("")
  const [newEventTime, setNewEventTime] = React.useState("")

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.toDateString() === date.toDateString()
    )
  }

  const datesWithEvents = events.map((event) => event.date)

  const handleAddEvent = () => {
    if (newEventTitle.trim() && selectedDate) {
      const newEvent: CalendarEvent = {
        id: Date.now().toString(),
        date: selectedDate,
        title: newEventTitle.trim(),
        time: newEventTime || undefined,
      }
      setEvents([...events, newEvent])
      setNewEventTitle("")
      setNewEventTime("")
      setIsDialogOpen(false)
    }
  }

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter((event) => event.id !== eventId))
  }

  const selectedDateEvents = selectedDate
    ? getEventsForDate(selectedDate)
    : []

  return (
    <div className={cn("flex flex-col lg:flex-row gap-6", className)}>
      {/* Calendar */}
      <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          modifiers={{
            hasEvent: datesWithEvents,
          }}
          modifiersClassNames={{
            hasEvent: "relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-1 after:rounded-full after:bg-primary",
          }}
          className="rounded-md"
        />
      </div>

      {/* Events Panel */}
      <div className="flex-1 bg-card rounded-xl border border-border p-6 shadow-sm min-w-[280px]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg">
              {selectedDate?.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </h3>
            <p className="text-sm text-muted-foreground">
              {selectedDateEvents.length === 0
                ? "No events scheduled"
                : `${selectedDateEvents.length} event${selectedDateEvents.length > 1 ? "s" : ""}`}
            </p>
          </div>
          <Button
            size="sm"
            onClick={() => setIsDialogOpen(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>

        {/* Events List */}
        <div className="space-y-3">
          {selectedDateEvents.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p className="text-sm">No events for this day</p>
              <p className="text-xs mt-1">Click &quot;Add&quot; to create one</p>
            </div>
          ) : (
            selectedDateEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-start justify-between p-3 bg-secondary rounded-lg group"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{event.title}</p>
                  {event.time && (
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive-foreground hover:bg-destructive/10"
                  onClick={() => handleDeleteEvent(event.id)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Delete event</span>
                </Button>
              </div>
            ))
          )}
        </div>

        {/* Upcoming Events */}
        {events.length > 0 && (
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="text-sm font-medium text-muted-foreground mb-3">
              Upcoming Events
            </h4>
            <div className="space-y-2">
              {events
                .filter((event) => event.date >= new Date(new Date().setHours(0, 0, 0, 0)))
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .slice(0, 5)
                .map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center gap-3 text-sm cursor-pointer hover:bg-secondary/50 p-2 rounded-md transition-colors"
                    onClick={() => setSelectedDate(event.date)}
                  >
                    <div className="flex-shrink-0 w-10 text-center">
                      <div className="text-xs text-muted-foreground">
                        {event.date.toLocaleDateString("en-US", { month: "short" })}
                      </div>
                      <div className="font-semibold">{event.date.getDate()}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="truncate">{event.title}</p>
                      {event.time && (
                        <p className="text-xs text-muted-foreground">{event.time}</p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Add Event Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Add Event</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="event-title" className="text-sm font-medium">
                Event Title
              </label>
              <Input
                id="event-title"
                placeholder="Enter event title"
                value={newEventTitle}
                onChange={(e) => setNewEventTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddEvent()
                  }
                }}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="event-time" className="text-sm font-medium">
                Time (optional)
              </label>
              <Input
                id="event-time"
                placeholder="e.g., 2:00 PM"
                value={newEventTime}
                onChange={(e) => setNewEventTime(e.target.value)}
              />
            </div>
            <div className="text-sm text-muted-foreground">
              Date:{" "}
              {selectedDate?.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleAddEvent}
              disabled={!newEventTitle.trim()}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Add Event
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
