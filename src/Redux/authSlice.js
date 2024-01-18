import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const initializeAuthState = createAsyncThunk('initializeAuthState', async () => {
    try {
        const msg = localStorage.getItem('msg') || "";
        const user = JSON.parse(localStorage.getItem('user')) || "";
        const accessToken = localStorage.getItem('accessToken') || "";
        const photoURL = localStorage.getItem('Foto') || "";
        const uid = localStorage.getItem('uid') || "";

        return { msg, user, accessToken, photoURL, uid };
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
}); const accessToken = localStorage.getItem('accessToken') || "";


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
        const response = await axios.post('https://belajarin-tau.vercel.app/addMentor', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error("Error registering mentor: " + error.message);
    }
});

export const signInMentor = createAsyncThunk('signInMentor', async (body) => {
    try {
        const res = await fetch('https://belajarin-tau.vercel.app/dashboard/login/mentor', {
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

export const addMateri = createAsyncThunk('addMateri', async (formData) => {
    const user = JSON.parse(localStorage.getItem('user')) || "";
    const uid = localStorage.getItem('uid') || "";

    try {
        const response = await axios.post(`https://belajarin-tau.vercel.app/HomeMentor/${user}/${uid}/addMateri`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error("Error addig Class: " + error.message);
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
        photoURL: '',
        uid: "",
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
            .addCase(addMateri.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addMateri.fulfilled, (state, { payload }) => {
                state.loading = false;
                const { error, msg, user, uid } = payload;
                if (error) {
                    state.error = error;
                } else {
                    state.user = user;
                    state.uid = uid;
                    state.msg = msg;
                    toast.success('Course added successfully');
                }
            })
            .addCase(addMateri.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(signInMentor.pending, (state) => {
                state.loading = true;
                state.error = toast.loading("Pending");
            })
            .addCase(signInMentor.fulfilled, (state, { payload }) => {
                state.loading = false;
                const { error, msg, accessToken, user, photoURL, uid } = payload;
                if (error) {
                    state.error = error;
                } else {
                    state.msg = msg;
                    state.accessToken = accessToken;
                    state.user = user;
                    state.photoURL = photoURL;
                    state.uid = uid;


                    localStorage.setItem('msg', msg);
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('Foto', photoURL);
                    localStorage.setItem('uid', uid);

                    toast.success('Successfully toasted!')
                    return window.location.pathname = `/HomeMentor/${user}/${uid}`
                }
            })
            .addCase(signInMentor.rejected, (state, action) => {
                state.loading = false;
                state.error = "Request rejected: " + action.error.message;
                console.error(action.error);
                toast.error("Rejected")
            })
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
                toast.error('Mentor registration Rejected', {
                    duration: 6000
                })
            })

            .addCase(initializeAuthState.fulfilled, (state, { payload }) => {
                state.msg = payload.msg;
                state.user = payload.user;
                state.photoURL = payload.photoURL;
                state.accessToken = payload.accessToken;
                state.uid = payload.uid;

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
                const { error, msg, accessToken, user, photoURL, uid } = payload;
                if (error) {
                    state.error = error;
                } else {
                    state.msg = msg;
                    state.accessToken = accessToken;
                    state.user = user;
                    state.photoURL = photoURL;
                    state.uid = uid;



                    localStorage.setItem('msg', msg);
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('Foto', photoURL);
                    localStorage.setItem('uid', uid);
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
    },
});

export const { addToken, addUser, logout } = authSlice.actions

export default authSlice.reducer;
