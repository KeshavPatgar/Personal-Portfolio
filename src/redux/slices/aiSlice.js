import { createSlice } from '@reduxjs/toolkit';

const aiSlice = createSlice({
  name: 'ai',
  initialState: {
    messages: [
      { sender: 'ai', text: 'Hi! I am Keshav’s AI assistant. Ask me anything about his experience or projects!' }
    ],
    isTyping: false
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setTyping: (state, action) => {
      state.isTyping = action.payload;
    }
  }
});

export const { addMessage, setTyping } = aiSlice.actions;
export default aiSlice.reducer;