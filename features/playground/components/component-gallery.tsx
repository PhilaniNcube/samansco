"use client";

import { LoaderCircleIcon, PlusIcon, SparklesIcon } from "lucide-react";
import * as React from "react";
import {
  Accordion,
  AccordionSection,
  AccordionSectionContent,
  AccordionSectionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const regions = [
  { value: "iad", label: "Washington, D.C. (iad1)" },
  { value: "fra", label: "Frankfurt (fra1)" },
  { value: "sfo", label: "San Francisco (sfo1)" },
];

const faq = [
  {
    value: "styling",
    question: "How do UI SDK parts get their look?",
    answer:
      "Every part is unstyled and exposes a data-slot plus state attributes. The wrappers in components/ui pass Tailwind classes built from the shadcn tokens in app/globals.css.",
  },
  {
    value: "cache",
    question: "Where does Cache Components show up?",
    answer:
      "The home page's activity feed is a 'use cache' query inside a Suspense boundary. The shell prerenders once and the cached fragment is reused until its cacheLife expires or updateTag invalidates it.",
  },
  {
    value: "shadcn",
    question: "Can I still add shadcn components?",
    answer:
      "Yes. components.json is configured, so the shadcn CLI can add components next to the UI SDK wrappers. Keep the ui-sdk layer declared first in globals.css so your utilities keep winning.",
  },
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function ComponentGallery() {
  const [notifications, setNotifications] = React.useState(true);
  const [plan, setPlan] = React.useState("pro");

  return (
    <div className="flex flex-col gap-6">
      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>
              Variants, sizes, links, and a pending action.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="Add item">
                <PlusIcon aria-hidden="true" />
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                onClick={() => wait(1400)}
                pendingAnnouncement="Saving"
              >
                <LoaderCircleIcon
                  data-show="pending"
                  data-slot="spinner"
                  className="animate-spin"
                  aria-hidden="true"
                />
                Save changes
              </Button>
              <Button
                variant="outline"
                render={<a href="https://ui-sdk.dev/docs/react" />}
              >
                Read the docs
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Form controls</CardTitle>
            <CardDescription>
              Field wires labels and descriptions to the control.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <Field>
              <FieldLabel>Workspace</FieldLabel>
              <Input defaultValue="samansco" placeholder="Workspace name" />
              <FieldDescription>
                This appears in invitations and billing.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel>Plan</FieldLabel>
              <Select
                items={[
                  { value: "free", label: "Free" },
                  { value: "pro", label: "Pro" },
                  { value: "team", label: "Team" },
                ]}
                value={plan}
                onValueChange={(value) => setPlan(value ?? "pro")}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="pro">Pro</SelectItem>
                  <SelectItem value="team">Team</SelectItem>
                </SelectContent>
              </Select>
              <FieldDescription>
                You are on the {plan} plan.
              </FieldDescription>
            </Field>

            <Field className="gap-0 rounded-lg border p-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <FieldLabel>Email notifications</FieldLabel>
                  <FieldDescription>
                    A daily digest of workspace activity.
                  </FieldDescription>
                </div>
                <Switch
                  checked={notifications}
                  onCheckedChange={setNotifications}
                  aria-label="Email notifications"
                />
              </div>
            </Field>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Dialog</CardTitle>
            <CardDescription>
              Focus is trapped, Escape closes, and focus returns.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-2">
            <Dialog>
              <DialogTrigger>New project</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create a project</DialogTitle>
                  <DialogDescription>
                    Give it a name and choose a region. You can change both
                    later.
                  </DialogDescription>
                </DialogHeader>

                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input placeholder="acme-web" autoFocus />
                  <FieldDescription>
                    Lowercase letters, numbers, and dashes.
                  </FieldDescription>
                </Field>

                <Field>
                  <FieldLabel>Region</FieldLabel>
                  <Select items={regions} defaultValue="iad">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region.value} value={region.value}>
                          {region.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <DialogFooter>
                  <DialogClose>Cancel</DialogClose>
                  <DialogClose className={buttonVariants()}>
                    Create project
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Tooltip>
              <TooltipTrigger className={buttonVariants({ variant: "ghost" })}>
                Hover for a tooltip
              </TooltipTrigger>
              <TooltipContent>Short, plain-text hints only.</TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>
              Arrow keys move between tabs; the whole list shares one tab stop.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview">
              <TabsList aria-label="Environment">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="production">Production</TabsTrigger>
                <TabsTrigger value="logs" disabled>
                  Logs
                </TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="mt-4">
                <div className="rounded-lg border bg-muted/40 p-4 font-mono text-xs leading-relaxed">
                  <p className="text-muted-foreground">$ next dev</p>
                  <p>▲ Next.js 16.4.6 (Turbopack)</p>
                  <p>✓ Ready in 840ms</p>
                  <p className="text-emerald-700 dark:text-emerald-400">
                    ○ Static shell prerendered
                  </p>
                  <p className="text-amber-700 dark:text-amber-400">
                    ◐ Activity streamed from cache
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="production" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Deploy with <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">next build</code>{" "}
                  to prerender every route. Request-time holes stream in behind
                  their Suspense fallbacks.
                </p>
              </TabsContent>
              <TabsContent value="logs" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Logs are part of the Pro plan.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Accordion</CardTitle>
          <CardDescription>
            Height animates from the measured panel size.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion defaultValue={["styling"]}>
            {faq.map((item) => (
              <AccordionSection key={item.value} value={item.value}>
                <AccordionSectionTrigger>
                  {item.question}
                </AccordionSectionTrigger>
                <AccordionSectionContent>
                  {item.answer}
                </AccordionSectionContent>
              </AccordionSection>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <section className="flex flex-wrap items-center gap-2">
        <Badge>
          <SparklesIcon aria-hidden="true" />
          New
        </Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="muted">Muted</Badge>
      </section>
    </div>
  );
}
