import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const initializeAuthState = createAsyncThunk('initializeAuthState', async () => {
    try {
        const msg = localStorage.getItem('msg') || "";
        const user = JSON.parse(localStorage.getItem('user')) || "";
        const accessToken = localStorage.getItem('accessToken') || "";

        return { msg, user, accessToken };
    } catch (error) {
        throw new Error("Error initializing auth state: " + error.message);
    }
});

export const signUpUser = createAsyncThunk('signupuser', async (body) => {
    try {
        const res = await fetch('https://belajarin-tau.vercel.app/auth/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        const data = await res.json();

        if (res.ok) {
            return data;
        } else {
            throw new Error(data.error);
        }
    } catch (error) {
        throw new Error("Network error: " + error.message);
    }
});

export const signInUser = createAsyncThunk('signInUser', async (body) => {
    try {
        const res = await fetch('https://belajarin-tau.vercel.app/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        const data = await res.json();

        if (res.ok) {
            return data;
        } else {
            throw new Error(data.error);
        }
    } catch (error) {
        throw new Error("Network error: " + error.message);
    }
});

export const logoutUser = createAsyncThunk('logoutUser', async () => {
    try {
        const res = await fetch('https://459d-2001-448a-404a-335c-5c6-51cf-12d0-71f4.ngrok-free.app/auth/logout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
        });
        const data = await res.json();

        if (res.ok) {
            return data;
        } else {
            throw new Error(data.error || "Logout failed");
        }
    } catch (error) {
        throw new Error("Network error: " + error.message);
    }
});
export const signUpMentor = createAsyncThunk('signUpMentor', async (formData) => {
    try {
        const response = await axios.post('https://459d-2001-448a-404a-335c-5c6-51cf-12d0-71f4.ngrok-free.app/addMentor', formData);
        return response.data;
    } catch (error) {
        throw new Error("Error registering mentor: " + error.message);
    }
});

export const uploadFile = createAsyncThunk('uploadFile', async (file) => {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post('https://459d-2001-448a-404a-335c-5c6-51cf-12d0-71f4.ngrok-free.app/uploads', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        throw new Error("Network error: " + error.message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        msg: "",
        user: "",
        accessToken: "",
        loading: false,
        error: "",
        status: 'idle',
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload || "";
        },
        addMentor: (state, action) => {
            state.user = action.payload || "";
        },
        addToken: (state, action) => {
            state.accessToken = action.payload || "";
        },
        logout: (state, action) => {
            state.accessToken = null;
            localStorage.clear();
            window.location.pathname = '/'
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpMentor.fulfilled, (state, { payload: { error, msg } }) => {
                state.loading = false;
                if (error) {
                    state.error = error;
                } else {
                    state.msg = msg;
                    toast.success('Mohon Cek Email Anda', {
                        duration: 6000
                    })
                }
            })
            .addCase(signUpMentor.rejected, (state, action) => {
                // Handle rejected mentor registration
                state.loading = false;
                state.error = "Mentor registration rejected: " + action.error.message;
                console.error(action.error);
            })

            .addCase(initializeAuthState.fulfilled, (state, { payload }) => {
                state.msg = payload.msg;
                state.user = payload.user;
                state.accessToken = payload.accessToken;
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.accessToken = null;
                localStorage.clear();
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = "Logout rejected: " + action.error.message;
                console.error(action.error);
            })
            .addCase(signInUser.pending, (state) => {
                state.loading = true;
                state.error = toast.loading("Pending");
            })
            .addCase(signInUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                const { error, msg, accessToken, user } = payload;
                if (error) {
                    state.error = error;
                } else {
                    state.msg = msg;
                    state.accessToken = accessToken;
                    state.user = user;

                    localStorage.setItem('msg', msg);
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('user', JSON.stringify(user));
                    toast.success('Successfully toasted!')
                    return window.location.pathname = '/'
                }
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.loading = false;
                state.error = "Request rejected: " + action.error.message;
                console.error(action.error);
                toast.error("Rejected")
            })
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
                state.error = toast.loading("Pending");
            })
            .addCase(signUpUser.fulfilled, (state, { payload: { error, msg } }) => {
                state.loading = false;
                if (error) {
                    state.error = error;
                } else {
                    state.msg = msg;
                    toast.success('Successfully toasted!')
                    window.location.pathname = 'SignWithMail/LoginMember'
                }
            })
            .addCase(signUpUser.rejected, (state) => {
                state.loading = false;
                state.error = "Request rejected";
                toast.error("Rejected")
            })
            .addCase(uploadFile.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(uploadFile.fulfilled, (state, { payload }) => {
                state.loading = false;
                // Lakukan sesuatu dengan data upload jika diperlukan
                console.log("File berhasil di-upload:", payload);
            })
            .addCase(uploadFile.rejected, (state, action) => {
                state.loading = false;
                state.error = "Upload rejected: " + action.error.message;
                console.error(action.error);
            });
    },
});

export const { addToken, addUser, logout } = authSlice.actions

export default authSlice.reducer;
