import { API_URL, NEXT_URL } from '@/config/index';

export const apiFetcher = async (url: string): Promise<any> => {
  const res = await fetch(`${API_URL}${url}`);
  // if (!res.ok) {
  //   throw await res.json();
  // }
  return res.json();
};

export const apiGet = async (url: string): Promise<any> => {
  const res = await fetch(`${API_URL}${url}`);
  if (!res.ok) {
    throw await res.json();
  }
  return res.json();
};

export const sessionGet = async (url: string): Promise<any> => {
  const res = await fetch(`${NEXT_URL}/api/session/${url}`);
  if (!res.ok) {
    throw await res.json();
  }
  return res.json();
};
