export class HttpClient {
    constructor(private baseUrl: string) {}
  
    private async request(path: string, options?: RequestInit) {
      const res = await fetch(`${this.baseUrl}${path}`, {
        headers: {
          "Content-Type": "application/json",
        },
        ...options,
      });
  
      if (!res.ok) {
        const error = await res.text();
        throw new Error(error || "API request failed");
      }
  
      return res.json();
    }
  
    get(path: string) {
      return this.request(path);
    }
  }
  