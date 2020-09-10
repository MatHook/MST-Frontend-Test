import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: "content",
  initialState: [
    {
      id: 0,
      visible: true,
      title: "Архитектура",
      image: './el-significado-del-color.png',
      content:
        "Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни",
    },
    {
      id: 1,
      visible: false,
      image: './el-significado-del-color.png',
      title: "Благоустройство",
      content:
        "Запроектированные большие окна, которые пропускают много солнечного света, наполнят Ваши квартиры теплотой и уютом",
    },
    {
      id: 2,
      visible: false,
      image: './el-significado-del-color.png',
      title: "Безопастность",
      content:
        "Современный двор европейского уровня — территория для детей, игр на свежем воздухе и вечерних",
    },
    {
      id: 3,
      image: './el-significado-del-color.png',
      visible: false,
      title: "Инженерия",
      content:
        "Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни",
    },
    {
      id: 4,
      image: './el-significado-del-color.png',
      visible: false,
      title: "Инфраструктура",
      content:
        "Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса",
    },
    {
      id: 5,
      image: './el-significado-del-color.png',
      visible: false,
      title: "Транспортная доступность",
      content:
        "Жилой комплекс «Первомайска» расположен в престижном Академическом районе",
    },
  ],
  reducers: {
    contentUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingContent = state.entities[id];
      if (existingContent) {
        existingContent.title = title;
        existingContent.content = content;
      }
    },
  },
});

export const { contentUpdated } = contentSlice.actions;

export default contentSlice.reducer;
