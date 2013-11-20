# Register Student(s) For Classes #

Register one or more students for classes.

<dl class="use-case-properties">
	<dt>Primary Actor(s)</dt>
	<dd>Parent, Administrator</dd>
	
	<dt>Priority</dt>
	<dd>A</dd>
	
	<dt>Level</dt>
	<dd>Summary</dd>
	
	<dt>Precondition</dt>
	<dd>The user is logged in</dd>
</dl>

## Main Success Scenario ##

<ol class="scenario">
	<li>If the user is an Administrator, then for each student the parent wishes to register:
		<ol>
			<li>Include [Create Student](create-student)
		</ol>
	<li>Otherwise (if the user is a Parent), include [Enter Student Information](enter-student-information)
	<li>Include [Select Classes](select-classes)
	<li>Include [Pay For Registrations](pay-for-registrations)
</ol>

### Deviations ###

__1a. Modify Existing Student(s)__  
If the user is an Administrator, then if any of the students have already been entered, include [Modify Student](modify-student)
for each student whose information needs to be updated.