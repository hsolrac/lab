// This is a "stub" file.  It's a little start on your solution.
// It's not a complete solution though; you have to write some code.

// Package gigasecond should have a package comment that summarizes what it's about.
// https://golang.org/doc/effective_go.html#commentary
package gigasecond
import "time"

const Gsecond = time.Second * 1e9

func AddGigasecond(t time.Time) time.Time {

	return t.Add(Gsecond)
}
