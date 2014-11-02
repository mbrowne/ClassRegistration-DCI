# Enter Student Information #

<dl class="use-case-properties">
	<dt>Primary Actor(s)</dt>
	<dd>Parent</dd>

	<dt>Level</dt>
	<dd>Sub-function</dd>
	
	<dt>Parent Use Case</dt>
	<dd>[Create Account](create-account)</dd>

	<dt>Precondition</dt>
	<dd>The user is logged in.</dd>
	
	<dt>Trigger</dt>
	<dd>The Parent wants to add a student to his/her account</dd>
</dl>

## First-Time Entry Scenario ##

<header class="scenario-columns-header">
	<h4>User Action</h4>
	<h4>System Responsibility</h4>
</header>

<ol class="scenario">
	<li class="user">Enters the student's demographic and other basic information
		such as allergy and medical information. The Parent also indicates whether this
		student should be searchable by the Find-a-Friend feature.
	</li>
	<li class="system">Validates the input and saves the student's information to the database</li>
	<li class="system">Displays a summary of all the students entered so far</li>
	<li class="user">If the Parent wants to enter information for another student, return to step 1</li>
</ol>

### Deviations ###

__1a. Duplicate student name__  
If a student with the same name is already in the database, the system displays an error


## Modify Existing Student(s) Scenario ##

<header class="scenario-columns-header">
	<h4>User Action</h4>
	<h4>System Responsibility</h4>
</header>

<ol class="scenario">
	<li class="system">Displays a summary of all the students entered so far
	<li class="user">Chooses a student to edit
	<li class="system">Displays the student information form
	<li class="user">Makes the desired changes/corrections
	<li class="system">Validates the input and saves the student's information to the database</li>
	<li class="system">Displays a summary of all the students entered so far</li>
	<li class="user">If the Parent wants to update the information for another student, return to step 1
</ol>

### Deviations ###

__2a. Duplicate student name__  
If a student with the same name already exists in this parent's account, the system displays an error