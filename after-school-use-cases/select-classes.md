# Select Classes #

Select classes for student(s).

<dl class="use-case-properties">
	<dt>Primary Actor(s)</dt>
	<dd>Parent, Administrator</dd>
	
	<dt>Priority</dt>
	<dd>A</dd>
	
	<dt>Level</dt>
	<dd>User goal</dd>
	
	<dt>Precondition</dt>
	<dd>The user is logged in and the Parent or Administrator has entered information for at
		least one student.</dd>
</dl>

## Registration by Parent Success Scenario ##

<header class="scenario-columns-header">
	<h4>User Action</h4>
	<h4>System Responsibility</h4>
</header>

<ol class="scenario">
	<li class="user">Selects a student to register
	<li class="system">Queries the database for a list of available classes. Class availability
		is determined by taking the class capacity and excluding all unpaid registrations whose expiration
		time has passed (unless an Administrator has overridden the expiration).
		(Number of minutes/hours until registrations expire is a global, configurable setting
		that can be changed at any time.)<br><br>
		Classes for for which this student is ineligible (e.g. due to age) are excluded.
		
	<li class="system">Displays a grid of available classes, grouped by day of the week.
		The UI highlights classes that were previously registered for one of the other students belonging to
		this parent, and for which this student is also eligible.
		Classes that have reached maximum capacity are grayed out.
		
	<li class="user">Marks the desired classes in the grid
	<li class="user">Clicks the "Save Selections" button
	<li class="system">Adds/updates the class selections in the Shopping Cart
	<li class="system">Saves the registration for this student to the database including the current
		date and time (which will be used later to determine if the registration has expired).
		The registration is not final until payment has been accepted, but the new registration will
		immediately affect any queries of class availability.
	
	<li class="user">If the Parent wants to select classes for more students, return to step 1
</ol>

### Deviations ###

__4a. Automatic core-class selection__  
When selecting enrichment classes, if the core class for the same day of the week has not already been selected,
the system automatically selects it since core classes are always included with the registration for any
given day of the week.


## View Cart Scenario (Registration by Parent) ##

In addition to entering the students sequentially, the Parent can view the Shopping Cart at any time,
which shows all the class selections made so far (for all students belonging to this Parent).
The Shopping Cart includes links to change the selections, which redirect to the page with the
class selection grid for the appropriate student.


## Registration by Administrator Success Scenario ##

<header class="scenario-columns-header">
	<h4>User Action</h4>
	<h4>System Responsibility</h4>
</header>

<ol class="scenario">
	<li class="user">
	<li class="system">
</ol>