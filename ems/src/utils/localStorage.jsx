const employees = [
  {
    employees: [
      {
        id: 1,
        firstname: "Rahul",
        email: "e@e.com",
        password: "123",
        taskNumbers: {
          total: 3,
          active: 1,
          newTask: 1,
          completed: 1,
          failed: 1
        },
        tasks: [
          {
            title: "Prepare Report",
            description: "Prepare monthly sales report",
            date: "2026-01-05",
            category: "Reporting",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "Client Meeting",
            description: "Attend meeting with client",
            date: "2026-01-06",
            category: "Meeting",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          },
          {
            title: "Update CRM",
            description: "Update client data in CRM",
            date: "2026-01-07",
            category: "Data Entry",
            active: false,
            newTask: false,
            completed: false,
            failed: true
          }
        ]
      },

      {
        id: 2,
        firstname: "Amit",
        email: "employee2@example.com",
        password: "123",
        taskNumbers: {
          total: 4,
          active: 2,
          newTask: 1,
          completed: 1,
          failed: 1
        },
        tasks: [
          {
            title: "Code Review",
            description: "Review pull requests",
            date: "2026-01-04",
            category: "Development",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "Fix Bugs",
            description: "Fix login bugs",
            date: "2026-01-05",
            category: "Bug Fix",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          },
          {
            title: "Write Tests",
            description: "Write unit tests",
            date: "2026-01-08",
            category: "Testing",
            active: true,
            newTask: false,
            completed: false,
            failed: false
          },
          {
            title: "Deploy App",
            description: "Deploy app to staging",
            date: "2026-01-09",
            category: "Deployment",
            active: false,
            newTask: false,
            completed: false,
            failed: true
          }
        ]
      },

      {
        id: 3,
        firstname: "Suresh",
        email: "employee3@example.com",
        password: "123",
        taskNumbers: {
          total: 3,
          active: 2,
          newTask: 1,
          completed: 1,
          failed: 0
        },
        tasks: [
          {
            title: "Design UI",
            description: "Create dashboard UI",
            date: "2026-01-03",
            category: "Design",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          },
          {
            title: "Prototype",
            description: "Build UI prototype",
            date: "2026-01-06",
            category: "Design",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "Feedback Review",
            description: "Review UI feedback",
            date: "2026-01-10",
            category: "Review",
            active: true,
            newTask: false,
            completed: false,
            failed: false
          }
        ]
      },

      {
        id: 4,
        firstname: "Rohit",
        email: "employee4@example.com",
        password: "123",
        taskNumbers: {
          total: 3,
          active: 1,
          newTask: 1,
          completed: 1,
          failed: 1
        },
        tasks: [
          {
            title: "Database Backup",
            description: "Backup production database",
            date: "2026-01-02",
            category: "Database",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          },
          {
            title: "Optimize Queries",
            description: "Improve DB performance",
            date: "2026-01-06",
            category: "Optimization",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "Server Monitoring",
            description: "Monitor server health",
            date: "2026-01-07",
            category: "Infrastructure",
            active: false,
            newTask: false,
            completed: false,
            failed: true
          }
        ]
      },

      {
        id: 5,
        firstname: "Vikas",
        email: "employee5@example.com",
        password: "123",
        taskNumbers: {
          total: 3,
          active: 2,
          newTask: 1,
          completed: 1,
          failed: 0
        },
        tasks: [
          {
            title: "Content Writing",
            description: "Write blog post",
            date: "2026-01-04",
            category: "Content",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "SEO Audit",
            description: "Analyze website SEO",
            date: "2026-01-05",
            category: "Marketing",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          },
          {
            title: "Campaign Setup",
            description: "Setup ad campaign",
            date: "2026-01-08",
            category: "Marketing",
            active: true,
            newTask: false,
            completed: false,
            failed: false
          }
        ]
      }
    ]
  }
];


const admin = [
  {
    admin: {
      id: 101,
      email: "admin@example.com",
      password: "123"
    }
  }
];

export const setLocalStorage = () => {
      localStorage.setItem('employees',JSON.stringify(employees))
      localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees, admin}
} 