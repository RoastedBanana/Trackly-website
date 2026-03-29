'use client';

import * as React from 'react';
import { HelpCircle, MessageCircle, ChevronDown } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('', className)}
    {...props}
  />
));
CustomAccordionItem.displayName = 'CustomAccordionItem';

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex flex-1 items-center justify-between gap-4 rounded-xl p-4 text-left',
        'bg-white transition-colors duration-200 hover:bg-surface',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        <HelpCircle className="h-5 w-5 text-accent" />
        <span className="text-base font-medium text-dark">
          {children}
        </span>
      </div>
      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-surface transition-transform group-hover:scale-105 group-data-[state=open]:rotate-180">
        <ChevronDown className="h-4 w-4 text-dark" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = 'CustomAccordionTrigger';

const CustomAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden',
      'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-2',
      className
    )}
    {...props}
  >
    <div className="mt-4 ml-14">
      <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-4 transition-colors duration-200">
        <span className="flex-1 text-sm text-muted leading-relaxed">{children}</span>
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-tint transition-transform hover:scale-105">
          <MessageCircle className="h-5 w-5 text-accent" />
        </div>
      </div>
    </div>
  </AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = 'CustomAccordionContent';

export {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
};
