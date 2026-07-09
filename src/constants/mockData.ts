import type { Driver, Ride, ChartDataPoint } from '@/types';

export const MOCK_DRIVERS: Driver[] = [
  {
    name: "Maharram Hasanli",
    phone: "+998 (99) 436-46-15",
    orders: 5,
    income: 98,
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Gina Garza",
    phone: "+998 (99) 158-10-15",
    orders: 5,
    income: 15,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Brian Reed",
    phone: "+998 (95) 489-46-20",
    orders: 5,
    income: 23,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Tammy Spencer",
    phone: "+998 (95) 785-10-02",
    orders: 5,
    income: 98,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Joseph Brooks",
    phone: "+998 (99) 436-46-15",
    orders: 5,
    income: 98,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Juan Steward",
    phone: "+998 (99) 436-46-15",
    orders: 5,
    income: 98,
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150",
  },
];

export const MOCK_RIDES: Ride[] = [
  {
    user: "Sierra Ferguson",
    phone: "+998 (99) 436-46-15",
    comfort: "simple",
    time: "04.12.2021 20:30",
    start: "пл. Беш Агач, Furkat Street, Tashkent, O'zbekiston",
    end: "пл. Беш Агач, Furkat Street, Tashkent, O'zbekiston",
    income: "50 300 000 SUM",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
  },
  {
    user: "Sierra Ferguson",
    phone: "+998 (99) 436-46-15",
    comfort: "otra",
    time: "04.12.2021 20:24",
    start: "21 Hamidulla Oripov ko'chasi, Тошкент, O'zbekiston",
    end: "21 Hamidulla Oripov ko'chasi, Тошкент, O'zbekiston",
    income: "300 000 SUM",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    user: "Sierra Ferguson",
    phone: "+998 (99) 436-46-15",
    comfort: "convenient",
    time: "04.12.2021 20:23",
    start: "76 Фаргона Йўли, Тошкент, O'zbekiston",
    end: "76 Фаргона Йўли, Тошкент, O'zbekiston",
    income: "5 300 000 SUM",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
  {
    user: "Sierra Ferguson",
    phone: "+998 (99) 436-46-15",
    comfort: "convenient",
    time: "17.11.2021 12:19",
    start: "13 Kumarik ko'chasi, Tashkent 100167, O'zbekiston",
    end: "13 Kumarik ko'chasi, Tashkent 100167, O'zbekiston",
    income: "500 300 000 SUM",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
  },
  {
    user: "Sierra Ferguson",
    phone: "+998 (99) 436-46-15",
    comfort: "convenient",
    time: "04.12.2021 20:30",
    start: "1 Kuyi Talarik ko'chasi, Тошкент 100091, O'zbekiston",
    end: "1 Kuyi Talarik ko'chasi, Тошкент 100091, O'zbekiston",
    income: "50 300 000 SUM",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
  {
    user: "Sierra Ferguson",
    phone: "+998 (99) 436-46-15",
    comfort: "convenient",
    time: "04.12.2021 19:15",
    start: "Sergeli, Tashkent, O'zbekiston",
    end: "Sergeli, Tashkent, O'zbekiston",
    income: "20 000 SUM",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
  },
  {
    user: "Sierra Ferguson",
    phone: "+998 (99) 436-46-15",
    comfort: "simple",
    time: "03.12.2021 18:45",
    start: "Chilanzar, Tashkent, O'zbekiston",
    end: "Chilanzar, Tashkent, O'zbekiston",
    income: "150 000 SUM",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    user: "Sierra Ferguson",
    phone: "+998 (99) 436-46-15",
    comfort: "convenient",
    time: "02.12.2021 14:20",
    start: "Yunusabad, Tashkent, O'zbekiston",
    end: "Yunusabad, Tashkent, O'zbekiston",
    income: "450 000 SUM",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
  {
    user: "Sierra Ferguson",
    phone: "+998 (99) 436-46-15",
    comfort: "otra",
    time: "01.12.2021 11:10",
    start: "Tashkent Airport, O'zbekiston",
    end: "Mirzo Ulugbek, Tashkent",
    income: "120 000 SUM",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
  },
  {
    user: "Sierra Ferguson",
    phone: "+998 (99) 436-46-15",
    comfort: "simple",
    time: "30.11.2021 09:30",
    start: "Tashkent City, O'zbekiston",
    end: "Yunusabad, Tashkent",
    income: "80 000 SUM",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
];

export const CHART_MOCK_DATA: ChartDataPoint[] = [
  { month: "Jan", averageGrade: 35, exams: 51 },
  { month: "Feb", averageGrade: 58, exams: 44 },
  { month: "Mar", averageGrade: 63, exams: 44 },
  { month: "Apr", averageGrade: 50, exams: 54 },
  { month: "May", averageGrade: 32, exams: 70 },
  { month: "Jun", averageGrade: 24, exams: 82 },
  { month: "Jul", averageGrade: 35, exams: 87 },
  { month: "Aug", averageGrade: 71, exams: 60 },
  { month: "Sep", averageGrade: 95, exams: 58 },
  { month: "Oct", averageGrade: 99, exams: 49 },
  { month: "Nov", averageGrade: 68, exams: 57 },
  { month: "Dec", averageGrade: 52, exams: 81 },
];

