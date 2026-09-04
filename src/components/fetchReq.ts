interface Todo2 {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data: Todo2 = await response.json();
    console.log(data);
  } catch (error: any) {
    console.error("Error fetching data:", error);
    if (error.message === "Failed to fetch data") {
      console.log("Error message:", error.message);
    } else {
      console.log("Error:", error);
    }
  }
};


