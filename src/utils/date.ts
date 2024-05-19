import { format, parseISO } from "date-fns";

export const formatDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, "dd/MM/yyyy");
};

export const formatTime = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, "HH'h' mm'm'");
};
