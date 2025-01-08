<script setup lang="ts">
import { readonly } from 'vue';

const features = readonly([
  'Income tax',
  'National insurance',
  'Student loans',
  'National minimum wage',
  'Pensions',
  'Salary sacrifice',
  'Employee management',
  'All pay frequencies from weekly to annual',
  'Support for SMP, SAP, SShPP, SPBP and SNCP',
  'PDF Payslips',
  'Full Payment Submissions (FPS)',
  'Employer Payment Summaries (EPS)',
  'Tax code change notifications',
  'Student loan and postgraduate loan start and stop notifications',
  'P45 and P60 generation and publication',
  'Employment Allowance and Small Employers Relief',
  'Pension Auto-Enrolment*',
  'P32 report',
  'NEST pensions integration*',
  '... and more',
]);

const firstFeatureGroup = features.slice(0, 10);
const lastFeatureGroup = features.slice(10);
</script>

<template>
  <div class="w-full space-y-4 bg-accent p-4 md:p-8 lg:space-y-6 lg:p-12 xl:p-16">
    <h6 class="text-lg font-bold">Payetools provides all the features you need:</h6>

    <ul class="grid list-inside list-disc grid-cols-2 gap-2 lg:gap-4">
      <div class="col-span-2 space-y-2 pl-4 sm:pl-6 md:pl-10 lg:col-span-1">
        <template v-for="(feature, index) in firstFeatureGroup" :key="index">
          <li>{{ feature }}</li>
        </template>
      </div>

      <div class="col-span-2 space-y-2 pl-4 sm:pl-6 md:pl-10 lg:col-span-1">
        <template v-for="(feature, index) in lastFeatureGroup" :key="index">
          <li>{{ feature }}</li>
        </template>
      </div>
    </ul>

    <div>
      <p class="text-sm text-muted-foreground">* Coming in Q2 2025</p>
    </div>
  </div>
</template>
