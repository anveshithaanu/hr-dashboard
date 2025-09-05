import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  summaryStats = [
    {
      title: 'Total Employees',
      value: '1,250',
      icon: 'bi-people',
      colorClass: 'primary',
    },
    {
      title: 'New Hires (last month)',
      value: '30',
      icon: 'bi-person-plus',
      colorClass: 'success',
    },
    {
      title: 'Open Positions',
      value: '15',
      icon: 'bi-briefcase',
      colorClass: 'warning',
    },
    {
      title: 'Upcoming Reviews',
      value: '25',
      icon: 'bi-calendar-event',
      colorClass: 'info',
    },
  ];

  // --- Performance Trend Chart (Line) ---
  public performanceChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Average Performance Score',
        fill: true,
        tension: 0.4,
        borderColor: '#42A5F5', // Soft blue
        backgroundColor: 'rgba(66, 165, 245, 0.2)', // Lighter fill
        pointBackgroundColor: '#42A5F5',
      },
    ],
  };
  public performanceChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: { tension: 0.4 },
      point: { radius: 5 },
    },
    scales: {
      x: {
        grid: { display: false },
      },
    },
  };
  public performanceChartType: ChartType = 'line';

  // --- Department Headcount Chart (Doughnut) ---
  public headcountChartData: ChartData<'doughnut'> = {
    labels: ['Engineering', 'Marketing', 'Sales', 'HR', 'Support'],
    datasets: [
      {
        data: [25, 18, 15, 10, 8],
        backgroundColor: [
          '#F56C4E',
          '#FFB74A',
          '#81C784',
          '#64B5F6',
          '#9575CD',
        ],
        hoverBackgroundColor: [
          '#F56C4E',
          '#FFB74A',
          '#81C784',
          '#64B5F6',
          '#9575CD',
        ],
        hoverBorderColor: 'rgba(0, 0, 0, 0)',
        hoverBorderWidth: 0,
      },
    ],
  };
  public headcountChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public headcountChartType: ChartType = 'doughnut';

  // --- Recruitment Source Chart (Bar) ---
  public recruitmentChartData: ChartData<'bar'> = {
    labels: ['LinkedIn', 'Referrals', 'Company Website', 'Job Fairs'],
    datasets: [
      {
        data: [25, 20, 15, 10],
        label: 'Hires per Source',
        backgroundColor: ['#F56C4E', '#FFB74A', '#81C784', '#64B5F6'],
        hoverBackgroundColor: ['#F56C4E', '#FFB74A', '#81C784', '#64B5F6'],
        hoverBorderColor: 'rgba(0, 0, 0, 0)',
        hoverBorderWidth: 0,
      },
    ],
  };
  public recruitmentChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public recruitmentChartType: ChartType = 'bar';

  // --- Recent Activity Data ---
  recentActivity = [
    {
      type: 'New Hire',
      description: 'John Doe onboarded',
      timestamp: '2 mins ago',
    },
    {
      type: 'Leave Request',
      description: 'Jane Smith requested leave',
      timestamp: '1 hour ago',
    },
    {
      type: 'Performance Review',
      description: 'Q2 review submitted for Team A',
      timestamp: '3 hours ago',
    },
    {
      type: 'System Update',
      description: 'System update completed',
      timestamp: 'Yesterday',
    },
  ];

  // --- Employee Table Data (mocked) ---
  employees = [
    { id: 1, name: 'John Doe', department: 'Engineering', status: 'Active' },
    { id: 2, name: 'Jane Smith', department: 'Marketing', status: 'On Leave' },
    { id: 3, name: 'Mike Johnson', department: 'Sales', status: 'Active' },
    { id: 4, name: 'Emily Davis', department: 'HR', status: 'Active' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
