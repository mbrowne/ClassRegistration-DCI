# Calculate Discounts #

<dl class="use-case-properties">
	<dt>Level</dt>
	<dd>Sub-function</dd>

	<dt>Parent Use Case</dt>
	<dd><a href="pay-for-registrations">Pay for Registrations</a></dd>

	<dt>Precondition</dt>
	<dd>The sub-total has been calculated</dd>
</dl>

## Main Success Scenario ##

<ol class="scenario">
	<li>Calculate the early registration discount (not applicable until 2014)</li>
	<li>Calculate the sibling discount:
		<ol>
			<li>For each day of the week that the student is to be enrolled in:
				<ol>
					<li>If any of the student's siblings are also to be enrolled (or have already been enrolled)
						for this day of the week, apply the sibling discount<br>
						**NB:** The sibling discount will be applied to EVERY sibling who is enrolling in this
						session, including the first sibling.
				</ol>
			</li>
		</ol>
	</li>
	<li>Return the total discount amount for each of the above discount types
</ol>