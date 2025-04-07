<script setup lang="ts"></script>

<template>
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <h2 class="text-3xl font-bold tracking-tight">Simplify your payroll integration</h2>
        <div class="space-y-4 text-lg text-muted-foreground">
          <p>
            <span class="font-medium text-foreground">You need to add payroll to your platform.</span> But it
            isn't your company's core competency. It's complicated, often opaque and at the end of the
            day, <span class="font-medium text-foreground">a mountain of work.</span>
          </p>

          <p>
            Payetools provides everything you need to <span class="font-medium text-foreground">payroll-enable</span> your
            application, get <span class="font-medium text-foreground">HMRC-recognised</span> and
            <span class="font-medium text-foreground">fully compliant</span> via a comprehensive REST-based API.
          </p>

          <p>And no need to worry about endless updates - Payetools has you covered.</p>
        </div>
      </div>
      <div class="bg-accent rounded-xl p-6 shadow-sm">
        <div class="bg-card rounded-lg p-6 shadow-sm border border-border">
          <pre class="text-sm overflow-x-auto"><code>// Example API request
const response = await fetch('https://api.payetools.com/v1/payroll', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    employeeId: 'emp_123',
    period: '2023-04',
    salary: 5000
  })
});</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>