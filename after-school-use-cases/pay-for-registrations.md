# Pay for Registrations #

<dl class="use-case-properties">
	<dt>Primary Actor(s)</dt>
	<dd>Parent, or Administrator (on behalf of parent)</dd>
	
	<dt>Level</dt>
	<dd>Sub-function</dd>
	
	<dt>Parent Use Case</dt>
	<dd>[Register Student(s) for Classes](register-students-for-classes)</dd>
	
	<dt>Precondition</dt>
	<dd>The Parent has provided information and selected classes for at least one student</dd>
	
	<dt>Postcondition (Guarantees)</dt>
	<dd>The registration is only marked as paid in the database if payment was successfully
		processed or (in the case of check/cash) recorded.
	</dd>
	
	<dt>Trigger</dt>
	<dd>Parent indicates that he/she is done selecting classes</dd>
</dl>

## One-Time Credit Card Payment Success Scenario ##

<header class="scenario-columns-header">
	<h4>User Action</h4>
	<h4>System Responsibility</h4>
</header>

<ol class="scenario">
	<li class="system">Calculates the registration charges.<br>
	For each student being registered:
		<ul>
			<li>Calculate the subtotal (the sum of the prices for each class, before discounts)
			<li>Include [Calculate Discounts](calculate-discounts) and subtract
				the total discount amount from the subtotal
			<li>If the student was previously registered for **any** classes:
				<ul>
					<li>If the new total for the camper is greater than what was already paid,
						charge for the difference but don't charge the registration fee
				</ul>
			</li>
			<li>In all other cases, charge the registration fee (e.g. $10 for each camper)
			<li>Adds the total for this student to the total for this transaction,
				including details about all applicable discounts for future reference.
		</ul>
	</li>

	<li class="system">Displays an order summary
	
	<li class="user">Clicks the Checkout button
	<li class="system">Displays the payment form
	<li class="user">Selects payment method and enters payment information (e.g. credit card number)
	<li class="user">Clicks the "Complete Order" button

	
	<li class="system">Sends the payment information to the Payment Gateway
		and receives a response indicating that the payment was processed successfully
	<li class="system">Records the transaction in the database
	<li class="system">Marks the Parent's registration as paid in the database
</ol>

### Deviations ###

__3a. The total amount owed is zero__  
This can only happen if the student(s) were previously registered for classes of equal value, or if
discounts on the changed registrations cause the total to be zero. If it happens, the system:

0. Marks the registration as paid in the database
0. Displays a confirmation of the registration changes and the use case ends

__4b. The total amount owed is less than zero__

0. The system sends an email to all the Administrators informing them that a refund is due
0. The system  marks the registration as paid in the database
0. Skip to step 10 of the above scenario ("Emails the Parent a receipt"). The receipt includes a notice at
the top saying that a refund will be issued.

__6a. Payment Declined__  


## Financial Aid Scenario ##

TODO

## Payment Plan Success Scenario ##

<header class="scenario-columns-header">
	<h4>User Action</h4>
	<h4>System Responsibility</h4>
</header>

<ol class="scenario">
	<li class="user">Steps 1-2 are identical to the One-Time Credit Card Payment Success Scenario.
	<li class="system">
</ol>