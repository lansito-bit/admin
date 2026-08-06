// Central place for all sidebar navigation config.
// - "path" items are internal routes (handled by react-router-dom)
// - "href" items are external links (Google Sheets / Forms / Drive) that
//   open in a new tab instead of navigating within the app.
//
// Swap the placeholder URLs below for your real Sheets/Forms/Drive links —
// nothing else in the app needs to change.

export const navConfig = [
  {
    section: "Overview",
    items: [
      { label: "Dashboard Overview", path: "/overview" },
    ],
  },
  {
    section: "Faculty",
    items: [
      { label: "Faculty Grade Sheet", href:"https://1drv.ms/x/c/ae87a52d7f7ce711/IQCX7iSiadB0T4LisWeBNVYCAS91-i9PUPmYhsBKuMYXzuo?e=iGpG2A"},
      { label: "Faculty Monitoring", href: "https://1drv.ms/x/c/ae87a52d7f7ce711/IQBNPrQnzMRaSpY9-b_ov6UKAfEpzuJXWSmh_FFhHUfGU1M?e=AemBiw" },
      { label: "Attendance", path: "/faculty/attendance" },
      { label: "Faculty Files", href: "https://drive.google.com/drive/folders/PLACEHOLDER_FACULTY_FILES" },
    ],
  },
  {
    section: "Students",
    items: [
      { label: "Advising", href: "https://1drv.ms/x/c/ae87a52d7f7ce711/IQCGA2-9rgHnQb0rbrnqtUzLATeU1L-tvxKMxPqQXYvUne4?e=hgZ5LG" },
      { label: "1st Year", href: "https://1drv.ms/x/c/ae87a52d7f7ce711/IQBz7ZmYH_5dTp0Ak6uWu4UVAVr8OUC1ku4dq-MHEadtkwo?e=N3AGcB" },
      { label: "2nd Year", href: "https://1drv.ms/x/c/ae87a52d7f7ce711/IQDrlXLnO0vkS6DIE3xLSV8DAU59nMLlFU0zZ73QG5sxlzc?e=50Nhhi" },
      { label: "3rd Year", href: "https://1drv.ms/x/c/ae87a52d7f7ce711/IQAWbEpVaNSOTZA6zEfX5I6wAU4DzAaGRs7Iygc95mdAyAo?e=WmALX7" },
      { label: "4th Year", href: "https://1drv.ms/x/c/ae87a52d7f7ce711/IQBsgrUeZYHxT5zFWLcCueCaAaZ67Uc70vz5BbD3Nqr-e-Q?e=rj6lCd" },
    ],
  },
  {
    section: "Institution",
    items: [
      { label: "Property Request", href: "https://1drv.ms/x/c/ae87a52d7f7ce711/IQBuPGJQ84kIQr-f_AIwPQUGAaHcEpznW3HNge229G2Aymk?e=X7BfSo" },
      { label: "Registrar", path: "/institution/registrar" },
      { label: "Forms", href: "https://forms.google.com/PLACEHOLDER_FORMS" },
    ],
  },
  {
    section: "Department",
    items: [
      { label: "Teacher's Module", href: "https://drive.google.com/drive/folders/1wne4J8Bzu3xkTfJLwH6wu6m0onRDtNWf?usp=sharing" },
      { label: "Enrollment Tracker", path: "/department/enrollment-tracker" },
      { label: "Performance Tracker", path: "/department/performance-tracker" },
    ],
  },
];
