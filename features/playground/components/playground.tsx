"use client";

import {
  InfoIcon,
  LoaderCircleIcon,
  RocketIcon,
} from "lucide-react";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

const environments = [
  { value: "production", label: "Production" },
  { value: "preview", label: "Preview" },
  { value: "development", label: "Development" },
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function Playground() {
  const [autoDeploy, setAutoDeploy] = React.useState(true);
  const [environment, setEnvironment] = React.useState("production");
  const [project, setProject] = React.useState("acme-web");

  return (
    <Card className="w-full gap-0 overflow-hidden py-0 shadow-xl shadow-foreground/5">
      <CardHeader className="border-b py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <CardTitle>Live playground</CardTitle>
            <CardDescription>UI SDK behavior, shadcn tokens.</CardDescription>
          </div>
          <Badge variant="outline" className="font-mono">
            client
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        <Tabs defaultValue="deploy">
          <TabsList className="w-full" aria-label="Playground">
            <TabsTrigger value="deploy">Deploy</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="deploy" className="mt-4 flex flex-col gap-4">
            <Field>
              <FieldLabel>Project</FieldLabel>
              <Input
                value={project}
                onValueChange={(value) => setProject(value)}
                placeholder="acme-web"
              />
              <FieldDescription>A slug for this deployment.</FieldDescription>
            </Field>

            <Field>
              <FieldLabel>Environment</FieldLabel>
              <Select
                items={environments}
                value={environment}
                onValueChange={(value) => setEnvironment(value ?? "production")}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {environments.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <div className="flex items-center justify-between gap-4 border p-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Auto-deploy</span>
                <Tooltip>
                  <TooltipTrigger
                    className="grid size-5 place-items-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="About auto-deploy"
                  >
                    <InfoIcon className="size-3.5" aria-hidden="true" />
                  </TooltipTrigger>
                  <TooltipContent>Ship every push to main.</TooltipContent>
                </Tooltip>
              </div>
              <Switch
                checked={autoDeploy}
                onCheckedChange={setAutoDeploy}
                aria-label="Auto-deploy"
              />
            </div>

            <Button
              className="w-full"
              onClick={() => wait(1200)}
              pendingAnnouncement="Deploying"
            >
              <RocketIcon data-show="idle" aria-hidden="true" />
              <LoaderCircleIcon
                data-show="pending"
                data-slot="spinner"
                className="animate-spin"
                aria-hidden="true"
              />
              Deploy {environment}
            </Button>
          </TabsContent>

          <TabsContent value="settings" className="mt-4 flex flex-col gap-4">
            <Field>
              <FieldLabel>Team domain</FieldLabel>
              <Input
                type="url"
                defaultValue="https://acme.com"
                placeholder="https://acme.com"
              />
              <FieldDescription>
                Used for preview links and invitations.
              </FieldDescription>
            </Field>

            <Field className="gap-0 border p-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <FieldLabel>Analytics</FieldLabel>
                  <FieldDescription>
                    Share anonymous usage data.
                  </FieldDescription>
                </div>
                <Switch defaultChecked aria-label="Analytics" />
              </div>
            </Field>

            <Button variant="secondary" onClick={() => wait(600)}>
              Save settings
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>

      <CardFooter className="border-t bg-muted/40 py-3 text-xs text-muted-foreground">
        Server-rendered first, hydrated after.
      </CardFooter>
    </Card>
  );
}
