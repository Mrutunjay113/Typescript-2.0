import axios, { AxiosResponse } from "axios";

interface Todo_1 {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo_1> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log(response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("Error message:", error);
    } else {
      console.log("Error:", error);
    }
  }
};
