import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { Tabs, TabsList, TabsTrigger, TabsContent, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";

export default function TabsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Tabs</h1>
        <p className="text-lg text-muted-foreground">
          Tabbed content sections for organizing related information.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock language="bash">
          pnpm add @rouf-dev/pantheon-ui
        </CodeBlock>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock language="tsx">
{`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@rouf-dev/pantheon-ui";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Content for Tab 1
  </TabsContent>
  <TabsContent value="tab2">
    Content for Tab 2
  </TabsContent>
</Tabs>`}
        </CodeBlock>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Default</h3>
            <ComponentPreview
              code={`<Tabs defaultValue="account" className="w-full">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm">Update your account settings and preferences.</p>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="password">
    <Card>
      <CardHeader>
        <CardTitle>Password</CardTitle>
        <CardDescription>
          Change your password here.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm">Secure your account with a strong password.</p>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="settings">
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>
          Manage your application settings.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm">Configure your preferences and notifications.</p>
      </CardContent>
    </Card>
  </TabsContent>
</Tabs>`}
            >
              <Tabs defaultValue="account" className="w-full">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account</CardTitle>
                      <CardDescription>
                        Make changes to your account here.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm">Update your account settings and preferences.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>
                        Change your password here.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm">Secure your account with a strong password.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Settings</CardTitle>
                      <CardDescription>
                        Manage your application settings.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm">Configure your preferences and notifications.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </ComponentPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
