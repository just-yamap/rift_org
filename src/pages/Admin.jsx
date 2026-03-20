import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/lib/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Mail, Users, TrendingUp, Download } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

export default function Admin() {
  const { user } = useAuth();

  const { data: signups = [], isLoading } = useQuery({
    queryKey: ['admin-signups'],
    queryFn: () => base44.entities.EarlyBirdSignup.list('-created_date', 1000),
    initialData: [],
  });

  // Redirect if not admin
  if (user && user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="text-destructive">Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">You don't have permission to view this page.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const exportCSV = () => {
    const headers = ['Email', 'Name', 'Quantity', 'Signed Up'];
    const rows = signups.map(s => [
      s.email,
      s.name || '',
      s.quantity || 1,
      format(new Date(s.created_date), 'yyyy-MM-dd HH:mm:ss')
    ]);
    
    const csv = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rift-early-bird-signups-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">RIFT Admin Dashboard</h1>
          <p className="font-body text-muted-foreground">Early bird signup management</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Signups</CardTitle>
              <Users className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="font-heading text-2xl font-bold text-foreground">{signups.length}</div>
              <p className="font-body text-xs text-muted-foreground mt-1">Early bird subscribers</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Goal Progress</CardTitle>
              <TrendingUp className="w-4 h-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="font-heading text-2xl font-bold text-foreground">{Math.min(Math.round((signups.length / 500) * 100), 100)}%</div>
              <p className="font-body text-xs text-muted-foreground mt-1">{500 - signups.length} spots remaining</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Latest Signup</CardTitle>
              <Mail className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="font-heading text-sm font-semibold text-foreground truncate">
                {signups[0]?.email || 'No signups yet'}
              </div>
              <p className="font-body text-xs text-muted-foreground mt-1">
                {signups[0] ? format(new Date(signups[0].created_date), 'MMM d, yyyy') : '—'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-heading text-lg">All Signups</CardTitle>
            <Button
              onClick={exportCSV}
              variant="outline"
              size="sm"
              className="gap-2"
              disabled={signups.length === 0}
            >
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            ) : signups.length === 0 ? (
              <div className="text-center py-12">
                <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-20" />
                <p className="font-body text-muted-foreground">No signups yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-heading">Email</TableHead>
                      <TableHead className="font-heading">Name</TableHead>
                      <TableHead className="font-heading">Quantity</TableHead>
                      <TableHead className="font-heading">Signed Up</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {signups.map((signup) => (
                      <TableRow key={signup.id}>
                        <TableCell className="font-body">{signup.email}</TableCell>
                        <TableCell className="font-body text-muted-foreground">{signup.name || '—'}</TableCell>
                        <TableCell className="font-body text-muted-foreground">{signup.quantity || 1}</TableCell>
                        <TableCell className="font-body text-muted-foreground">
                          {format(new Date(signup.created_date), 'MMM d, yyyy HH:mm')}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}