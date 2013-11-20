# Send Registration Dump Notifications #

Email parents to let them to know that their registrations are soon to expire

<dl class="use-case-properties">
	<dt>Priority</dt>
	<dd>A</dd>

	<dt>Primary Actor</dt>
	<dd>Cron (System Scheduler)</dd>
	
	<dt>Precondition</dt>
	<dd>None</dd>
</dl>

## Main Success Scenario ##

<ol class="scenario">
	<li>The system queries the database for a list of emails of parents whose registrations will soon expire due to incomplete payment, where "soon" is a configurable number of hours. The query excludes parents for whom an email has already been sent (by checking the email log).
	<li>For each email address returned:
		<ol>
			<li>The system sends the notification email
			<li>The system adds an entry to a log indicating that the email was sent
		</ol>
	</li>
</ol>

## Deviations ##

__2a. Failure sending the email__

The system adds an entry to the error log that includes the email address

__2b. Failure writing to log__

The system emails the relevant system maintainers and developers to inform them of the problem