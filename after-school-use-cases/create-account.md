# Create Account #

The parent creates his/her own account (including optional additional parent/guardian info)
and enters basic information about his/her Students.

<dl class="use-case-properties">
	<dt>Primary Actor</dt>
	<dd>Parent</dd>

	<dt>Level</dt>
	<dd>User goal</dd>

	<dt>Precondition</dt>
	<dd>None</dd>
	
	<dt>Trigger</dt>
	<dd>The Parent wants to create a new account in order to register students for classes</dd>
</dl>

## Main Success Scenario ##

<header class="scenario-columns-header">
	<h4>User Action</h4>
	<h4>System Responsibility</h4>
</header>

<ol class="scenario">
	<li class="user">Enters contact information and chooses a password
	<li class="system">Validates the information and saves it to the database
	<li class="user">Optionally enters contact information for an additional parent/guardian
	<li class="system">Validates the information and saves it to the database
	<li class="user">Include [Enter Student Information](enter-student-information)
</ol>

### Deviations ###

__1a. Parent already has an account__  
If desired, Parent can update his/her contact information and additional parent/guardian.
Parent can also update student information and/or add additional students.

__1b. Email address already exists in the database__  
The system notifies Parent and suggests using the "Forgot Password" function.

__1c. Parent provides invalid email address or other contact info__  
The system displays an error.

__1d. Parent has problems accessing School Registration System__

1. Parent calls Administrator
2. Administrator completes the above steps on behalf of Parent.
	Include [Create User](create-user) and [Create Student](create-student)

__3a. Modify Existing Student(s)__  
If any of the students have already been entered, include [Modify Student](modify-student)
for each student whose information needs to be updated.