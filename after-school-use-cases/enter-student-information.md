# Enter Student Information #

<dl class="use-case-properties">
	<dt>Primary Actor(s)</dt>
	<dd>Parent</dd>

	<dt>Priority</dt>
	<dd>A</dd>

	<dt>Level</dt>
	<dd>User goal</dd>

	<dt>Precondition</dt>
	<dd>The user is logged in.</dd>
</dl>

## First-Time Entry Scenario ##

<header class="scenario-columns-header">
	<h4>User Action</h4>
	<h4>System Responsibility</h4>
</header>

<ol class="scenario">
	<li class="user">Clicks the "Add Student" button</li>
	<li class="system">Displays the student information form</li>
	<li class="user">Enters the student's demographic and other basic information
		such as allergy and medical information. The Parent also indicates whether this
		student should be searchable by the Find-a-Friend feature.
	</li>
	<li class="system">Validates the input and saves the student's information to the database</li>
	<li class="system">Displays a summary of all the students entered so far</li>
	<li class="user">If the Parent wants to enter information for another student, return to step 1</li>
</ol>

### Deviations ###

__4a. Duplicate student name__  
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
	<li class="system">Repeat step 1</li>
	<li class="user">If the Parent wants to update the information for another student, return to step 2
</ol>

### Deviations ###

__5a. Duplicate student name__  
If a student with the same name is already in the database, the system displays an error