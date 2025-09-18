import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth, apiFile } from "@/lib/api";
import { setLoading } from "./UiSlice";

export const fetchArticlesAndCategories = createAsyncThunk(
  "article/fetchArticlesAndCategories",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const [articlesRes, categoriesRes] = await Promise.all([
        apiAuth.get("/articles"),
        apiAuth.get("/categories"),
      ]);
      return {
        articles: articlesRes.data.data,
        categories: categoriesRes.data.data,
      };
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch data");
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const addArticle = createAsyncThunk(
  "article/addArticle",
  async (data, { rejectWithValue }) => {
    try {
      let imageUrl = null;
      if (data.image) {
        const formData = new FormData();
        formData.append("image", data.image);
        const uploadRes = await apiFile.post("/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        imageUrl = uploadRes.data.imageUrl;
      }

      const res = await apiAuth.post("/articles", {
        title: data.title,
        content: data.content,
        categoryId: data.categoryId,
        imageUrl,
      });

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message || "Submit failed" });
    }
  }
);

export const updateArticle = createAsyncThunk(
  "article/updateArticle",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      let imageUrl = data.imageUrl || null;

      // Jika ada file baru
      if (data.image instanceof File) {
        const formData = new FormData();
        formData.append("image", data.image);

        const uploadRes = await apiFile.post("/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        imageUrl = uploadRes.data.imageUrl;
      }

      const payload = {
        title: data.title,
        content: data.content,
        categoryId: data.categoryId,
        ...(imageUrl ? { imageUrl } : {}),
      };

      const res = await apiAuth.put(`/articles/${id}`, payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message || "Update failed" });
    }
  }
);

export const deleteArticle = createAsyncThunk(
  "article/deleteArticle",
  async (id, { rejectWithValue }) => {
    try {
      await apiAuth.delete(`/articles/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to delete article");
    }
  }
);

export const addCategory = createAsyncThunk(
  "article/addCategory",
  async (data, { rejectWithValue }) => {
    try {
      const res = await apiAuth.post("/categories", data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to add category");
    }
  }
);

export const updateCategory = createAsyncThunk(
  "article/updateCategory",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await apiAuth.put(`/categories/${id}`, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to update category");
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "article/deleteCategory",
  async (id, { rejectWithValue }) => {
    try {
      await apiAuth.delete(`/categories/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to delete category");
    }
  }
);

const handleAdd = (state, payload, key) => {
  state[key].push(payload);
};

const handleUpdate = (state, payload, key) => {
  const index = state[key].findIndex((item) => item.id === payload.id);
  if (index !== -1) state[key][index] = payload;
};

const handleDelete = (state, payload, key) => {
  state[key] = state[key].filter((item) => item.id !== payload);
};

const dataSlice = createSlice({
  name: "article",
  initialState: {
    articles: [],
    categories: [],
    selectedCategory: "all",
    search: "",
    page: 1,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesAndCategories.fulfilled, (state, action) => {
        state.articles = action.payload.articles;
        state.categories = action.payload.categories;
      })
      .addCase(addArticle.fulfilled, (state, action) =>
        handleAdd(state, action.payload, "articles")
      )
      .addCase(addCategory.fulfilled, (state, action) =>
        handleAdd(state, action.payload, "categories")
      )
      .addCase(updateArticle.fulfilled, (state, action) =>
        handleUpdate(state, action.payload, "articles")
      )
      .addCase(updateCategory.fulfilled, (state, action) =>
        handleUpdate(state, action.payload, "categories")
      )
      .addCase(deleteArticle.fulfilled, (state, action) =>
        handleDelete(state, action.payload, "articles")
      )
      .addCase(deleteCategory.fulfilled, (state, action) =>
        handleDelete(state, action.payload, "categories")
      );
  },
});

export const { setSelectedCategory, setSearch, setPage } = dataSlice.actions;
export default dataSlice.reducer;
