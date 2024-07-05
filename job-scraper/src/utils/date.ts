import { formatDistanceToNow } from "date-fns";

export const getTime = (date:Date): string => {
    return formatDistanceToNow(date, {addSuffix:true});
}