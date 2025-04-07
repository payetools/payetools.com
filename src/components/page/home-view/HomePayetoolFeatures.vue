<script setup lang="ts">
import { readonly } from 'vue';

const features = readonly([
  'Income tax',
  'National insurance',
  'Student loans',
  'National minimum wage',
  'Pensions',
  'Student loan and postgraduate loan start and stop notifications',
  'Salary sacrifice',
  'Employee management',
  'All pay frequencies from weekly to annual',
  'Support for SMP, SAP, SShPP, SPBP and SNCP',
  'PDF Payslips',
  'Full Payment Submissions (FPS)',
  'Employer Payment Summaries (EPS)',
  'Tax code change notifications',
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
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-accent/50">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold tracking-tight mb-4">Complete Payroll Features</h2>
      <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
        Everything you need to build a powerful payroll system
      </p>
    </div>

    <div class="bg-background rounded-xl p-8 shadow-sm border border-border">
      <h3 class="text-xl font-medium mb-6">Payetools provides all the features you need:</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
        <div>
          <ul class="space-y-3">
            <template v-for="(feature, index) in firstFeatureGroup" :key="index">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-secondary flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </template>
          </ul>
        </div>

        <div>
          <ul class="space-y-3">
            <template v-for="(feature, index) in lastFeatureGroup" :key="index">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-secondary flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </template>
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-4 border-t border-border">
        <p class="text-sm text-muted-foreground">* Coming in Q2 2025</p>
      </div>
    </div>
  </div>
</template>