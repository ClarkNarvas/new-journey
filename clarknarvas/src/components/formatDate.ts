
import { parse } from 'date-fns';
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

const formatDateText = (dateInput: string) => {
    const parsedDate = parse(dateInput, "yyyy-MM-dd HH:mm:ss XXXX", new Date());
    const formattedDate = formatDistanceToNow(parsedDate, { addSuffix: true });
    return formattedDate;
  }

  export default formatDateText;