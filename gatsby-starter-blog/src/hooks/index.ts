import dayjs from 'dayjs';
/**
 * 데이트 포멧 처리 함수
 */
export const useDayFormat = (date: string) => {
  return dayjs(date).format('YYYY-MM-DD');
};
