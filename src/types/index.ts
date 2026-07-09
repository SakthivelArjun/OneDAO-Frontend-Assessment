
export interface Ride {
  user: string;
  phone: string;
  comfort: string;
  time: string;
  start: string;
  end: string;
  income: string;
  avatar: string;
}

export interface Driver {
  name: string;
  phone: string;
  orders: number;
  income: number;
  avatar: string;
}

export interface ChartDataPoint {
  month: string;
  averageGrade: number;
  exams: number;
}
