import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  FileText,
  CheckSquare,
  FolderOpen,
  User,
  Download,
  Eye,
  Edit,
  Upload,
  Trash2,
  Calendar,
  Clock,
  DollarSign,
  AlertCircle,
  CheckCircle2,
  Image as ImageIcon,
  Mail,
  Phone,
  MapPin,
  UserPlus,
} from "lucide-react";

export default function Portal() {
  const [activeTab, setActiveTab] = useState("home");

  // Dummy data
  const customerName = "Alex";
  const quotes = [
    { id: "CA-001", status: "Sent", date: "2024-11-05", amount: "$1,543", items: 3 },
    { id: "CA-002", status: "Draft", date: "2024-11-08", amount: "$2,120", items: 5 },
    { id: "CA-003", status: "Accepted", date: "2024-10-28", amount: "$899", items: 2 },
  ];

  const tasks = [
    { id: 1, title: "Upload 3 site photos", complete: false, priority: "high" },
    { id: 2, title: "Confirm installation date", complete: false, priority: "medium" },
    { id: 3, title: "Sign service agreement", complete: true, priority: "low" },
  ];

  const uploads = [
    { id: 1, name: "Front Door", url: "/placeholder.svg" },
    { id: 2, name: "Living Room", url: "/placeholder.svg" },
    { id: 3, name: "Electrical Panel", url: "/placeholder.svg" },
    { id: 4, name: "Back Door", url: "/placeholder.svg" },
  ];

  const documents = [
    { name: "Quote CA-001.pdf", type: "Quote", date: "2024-11-05" },
    { name: "Invoice CA-003.pdf", type: "Invoice", date: "2024-10-28" },
    { name: "Compliance Certificate.pdf", type: "Compliance", date: "2024-10-15" },
  ];

  const activityTimeline = [
    { event: "Installation scheduled", date: "2024-11-12", icon: Calendar, status: "upcoming" },
    { event: "Quote accepted", date: "2024-11-08", icon: CheckCircle2, status: "complete" },
    { event: "Photos uploaded", date: "2024-11-06", icon: Upload, status: "complete" },
    { event: "Quote created", date: "2024-11-05", icon: FileText, status: "complete" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-secondary mb-2">Customer Hub</h1>
            <p className="text-muted-foreground">Manage your quotes, installations, and account</p>
          </div>

          {/* Tabs Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="home"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3"
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </TabsTrigger>
              <TabsTrigger
                value="quotes"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3"
              >
                <FileText className="h-4 w-4 mr-2" />
                Quotes
              </TabsTrigger>
              <TabsTrigger
                value="tasks"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3"
              >
                <CheckSquare className="h-4 w-4 mr-2" />
                Tasks & Uploads
              </TabsTrigger>
              <TabsTrigger
                value="documents"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3"
              >
                <FolderOpen className="h-4 w-4 mr-2" />
                Documents
              </TabsTrigger>
              <TabsTrigger
                value="account"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3"
              >
                <User className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
            </TabsList>

            {/* HOME TAB */}
            <TabsContent value="home" className="space-y-6">
              {/* Welcome Banner */}
              <Card className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground border-0 shadow-lg">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-2">Welcome back, {customerName}! 👋</h2>
                  <p className="opacity-90">Here's what's happening with your security system project</p>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Active Quotes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-secondary">{quotes.filter(q => q.status !== 'Draft').length}</div>
                    <p className="text-xs text-muted-foreground mt-1">2 pending approval</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Pending Installs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">1</div>
                    <p className="text-xs text-muted-foreground mt-1">Scheduled for Nov 12</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Open Tasks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-secondary">{tasks.filter(t => !t.complete).length}</div>
                    <p className="text-xs text-muted-foreground mt-1">1 high priority</p>
                  </CardContent>
                </Card>
              </div>

              {/* Next Step Banner */}
              <Card className="border-l-4 border-l-primary bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Next Step</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Upload 3 site photos to finalize your quote CA-001
                      </p>
                      <Button size="sm" className="bg-primary hover:bg-primary-hover">
                        Upload Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Activity Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">Recent Activity</CardTitle>
                  <CardDescription>Your latest project updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activityTimeline.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 relative">
                        {index !== activityTimeline.length - 1 && (
                          <div className="absolute left-5 top-10 w-0.5 h-8 bg-border" />
                        )}
                        <div
                          className={`p-2 rounded-full ${
                            item.status === "complete"
                              ? "bg-secondary/10 text-secondary"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          <item.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="font-medium">{item.event}</p>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* QUOTES TAB */}
            <TabsContent value="quotes" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">Your Quotes</CardTitle>
                  <CardDescription>View and manage all your security system quotes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {quotes.map((quote) => (
                      <Card key={quote.id} className="border shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="font-mono font-semibold text-lg text-secondary">
                                  {quote.id}
                                </span>
                                <Badge
                                  variant={
                                    quote.status === "Accepted"
                                      ? "default"
                                      : quote.status === "Sent"
                                      ? "secondary"
                                      : "outline"
                                  }
                                  className={
                                    quote.status === "Accepted"
                                      ? "bg-secondary"
                                      : quote.status === "Sent"
                                      ? "bg-primary"
                                      : ""
                                  }
                                >
                                  {quote.status}
                                </Badge>
                              </div>
                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {quote.date}
                                </span>
                                <span className="flex items-center gap-1">
                                  <DollarSign className="h-3 w-3" />
                                  {quote.amount}
                                </span>
                                <span>{quote.items} items</span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                              {quote.status === "Draft" && (
                                <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                                  <Edit className="h-4 w-4 mr-1" />
                                  Edit
                                </Button>
                              )}
                              {quote.status === "Sent" && (
                                <Button size="sm" className="bg-primary hover:bg-primary-hover">
                                  Accept Quote
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quote Detail Example */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">Quote CA-001 Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-secondary">Items</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Vesta G1 Panel × 1</span>
                          <span className="font-medium">$799</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Indoor PIR × 4</span>
                          <span className="font-medium">$316</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Keypad × 1</span>
                          <span className="font-medium">$129</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between font-semibold text-base">
                          <span>Total</span>
                          <span className="text-primary">$1,543</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-secondary">Submitted Photos</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {uploads.slice(0, 4).map((img) => (
                          <div key={img.id} className="aspect-square rounded-lg bg-muted flex items-center justify-center">
                            <ImageIcon className="h-8 w-8 text-muted-foreground" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TASKS & UPLOADS TAB */}
            <TabsContent value="tasks" className="space-y-6">
              {/* Tasks Checklist */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">Outstanding Tasks</CardTitle>
                  <CardDescription>Complete these to move your project forward</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        className={`flex items-center gap-4 p-4 rounded-lg border ${
                          task.complete ? "bg-muted/30" : "bg-background"
                        }`}
                      >
                        <div
                          className={`h-5 w-5 rounded border-2 flex items-center justify-center ${
                            task.complete
                              ? "bg-secondary border-secondary"
                              : "border-muted-foreground"
                          }`}
                        >
                          {task.complete && <CheckCircle2 className="h-3 w-3 text-white" />}
                        </div>
                        <div className="flex-1">
                          <p className={task.complete ? "line-through text-muted-foreground" : ""}>
                            {task.title}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            task.priority === "high"
                              ? "border-primary text-primary"
                              : task.priority === "medium"
                              ? "border-secondary text-secondary"
                              : ""
                          }
                        >
                          {task.priority}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Photo Uploader */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">Upload Site Photos</CardTitle>
                  <CardDescription>Help us create an accurate quote</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Drag-drop zone */}
                  <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="font-medium mb-1">Drag photos here or click to browse</p>
                    <p className="text-sm text-muted-foreground">JPG, PNG up to 10MB</p>
                  </div>

                  {/* Requirements checklist */}
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold text-sm mb-3 text-secondary">Photo Requirements</h4>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                        <span>Entry points (doors/windows)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                        <span>Interior spaces</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                        <span>Mounting locations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                        <span>Electrical panel</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 pt-3 border-t">
                      💡 Tip: More photos = more accurate quote
                    </p>
                  </div>

                  {/* Uploaded Photos Grid */}
                  <div>
                    <h4 className="font-semibold mb-3 text-secondary">Uploaded Photos ({uploads.length})</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {uploads.map((img) => (
                        <div key={img.id} className="relative group">
                          <div className="aspect-square rounded-lg bg-muted border flex items-center justify-center">
                            <ImageIcon className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <p className="text-xs text-center mt-1 text-muted-foreground">{img.name}</p>
                          <Button
                            size="icon"
                            variant="destructive"
                            className="absolute -top-2 -right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upload Progress Example */}
                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">kitchen-view.jpg</span>
                        <span className="text-sm text-muted-foreground">68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                    </CardContent>
                  </Card>

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1">
                      <Upload className="h-4 w-4 mr-2" />
                      Add More Photos
                    </Button>
                    <Button className="flex-1 bg-primary hover:bg-primary-hover">Submit Photos</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* DOCUMENTS TAB */}
            <TabsContent value="documents" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">Your Documents</CardTitle>
                  <CardDescription>Access quotes, invoices, and compliance documents</CardDescription>
                </CardHeader>
                <CardContent>
                  {documents.length > 0 ? (
                    <div className="space-y-3">
                      {documents.map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 rounded-lg border hover:border-primary/50 transition-colors"
                        >
                          <div className="p-3 rounded-lg bg-primary/10">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{doc.name}</p>
                            <div className="flex gap-3 text-sm text-muted-foreground mt-1">
                              <span className="flex items-center gap-1">
                                <Badge variant="outline" className="text-xs">
                                  {doc.type}
                                </Badge>
                              </span>
                              <span>{doc.date}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <FolderOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                      <p className="text-muted-foreground mb-2">No documents yet</p>
                      <p className="text-sm text-muted-foreground">
                        Documents will appear here as your project progresses
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* ACCOUNT TAB */}
            <TabsContent value="account" className="space-y-6">
              {/* Customer Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">Your Information</CardTitle>
                  <CardDescription>Personal details and contact information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                        <p className="text-base mt-1">Alex Johnson</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                          <Mail className="h-4 w-4" /> Email
                        </label>
                        <p className="text-base mt-1">alex.johnson@email.com</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                          <Phone className="h-4 w-4" /> Phone
                        </label>
                        <p className="text-base mt-1">0412 345 678</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                          <MapPin className="h-4 w-4" /> Address
                        </label>
                        <p className="text-base mt-1">42 Security Lane, Sydney NSW 2000</p>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <Button variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Information
                  </Button>
                </CardContent>
              </Card>

              {/* Team Access */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">Portal Access</CardTitle>
                  <CardDescription>Manage who can access this customer portal</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Primary Contact */}
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                      <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-white font-semibold">
                        AJ
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Alex Johnson</p>
                        <p className="text-sm text-muted-foreground">alex.johnson@email.com</p>
                      </div>
                      <Badge>Primary</Badge>
                    </div>

                    {/* Invited Users */}
                    <div className="flex items-center gap-4 p-4 rounded-lg border">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                        SM
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Sarah Martin</p>
                        <p className="text-sm text-muted-foreground">sarah.m@email.com</p>
                      </div>
                      <Badge variant="outline">Invited</Badge>
                      <Button variant="ghost" size="sm">
                        Resend
                      </Button>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-lg border">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                        MC
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Mike Chen</p>
                        <p className="text-sm text-muted-foreground">mike.chen@email.com</p>
                      </div>
                      <Badge variant="secondary" className="bg-secondary">
                        Active
                      </Badge>
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </div>

                    <Separator className="my-4" />

                    <Button className="w-full bg-primary hover:bg-primary-hover">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add Team Member
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}
