SET check_function_bodies = false;
CREATE TABLE public.admins (
    name text NOT NULL,
    phone text NOT NULL,
    address text NOT NULL,
    a_id uuid NOT NULL
);
CREATE TABLE public.attendance (
    name text NOT NULL,
    username text NOT NULL,
    role text NOT NULL,
    date date DEFAULT now() NOT NULL,
    ispresent boolean NOT NULL,
    id uuid NOT NULL
);
CREATE TABLE public.bills (
    p_id uuid NOT NULL,
    payment_for text NOT NULL,
    due_date date DEFAULT now() NOT NULL,
    total integer NOT NULL,
    bill_id uuid NOT NULL,
    recieptionist uuid,
    helth_num text
);
CREATE TABLE public.doctors (
    name text NOT NULL,
    phone text NOT NULL,
    address text NOT NULL,
    speciality text NOT NULL,
    d_id uuid NOT NULL,
    specialization_category text
);
CREATE TABLE public.history (
    diseases_name text NOT NULL,
    prescription text NOT NULL,
    labratory_result text NOT NULL,
    doctors uuid NOT NULL,
    h_id uuid NOT NULL,
    patients uuid,
    diagnosis_date date DEFAULT now(),
    finished boolean DEFAULT false,
    health_num text NOT NULL,
    category text
);
CREATE TABLE public.orders_token (
    queued_at date DEFAULT now(),
    health_num text NOT NULL,
    p_id uuid,
    "order" integer,
    categories text
);
CREATE TABLE public.patients (
    p_id uuid NOT NULL,
    name text NOT NULL,
    phone text NOT NULL,
    address text NOT NULL,
    health_num text,
    registered_at date DEFAULT now()
);
CREATE TABLE public.recieptionists (
    name text NOT NULL,
    phone text NOT NULL,
    address text NOT NULL,
    r_id uuid NOT NULL
);
CREATE TABLE public.users (
    username text NOT NULL,
    password text NOT NULL,
    roles text,
    id uuid NOT NULL,
    name text,
    isactive boolean,
    phone text
);
ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_a_id_key UNIQUE (a_id);
ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_pkey PRIMARY KEY (a_id);
ALTER TABLE ONLY public.attendance
    ADD CONSTRAINT attendance_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.bills
    ADD CONSTRAINT bills_pkey PRIMARY KEY (bill_id);
ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_d_id_key UNIQUE (d_id);
ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_pkey PRIMARY KEY (d_id);
ALTER TABLE ONLY public.history
    ADD CONSTRAINT history_pkey PRIMARY KEY (h_id);
ALTER TABLE ONLY public.orders_token
    ADD CONSTRAINT orders_token_health_num_key UNIQUE (health_num);
ALTER TABLE ONLY public.orders_token
    ADD CONSTRAINT orders_token_pkey PRIMARY KEY (health_num);
ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_health_num_key UNIQUE (health_num);
ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_pkey PRIMARY KEY (p_id);
ALTER TABLE ONLY public.recieptionists
    ADD CONSTRAINT recieptionists_r_id_key UNIQUE (r_id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_id_key UNIQUE (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.bills
    ADD CONSTRAINT bills_helth_num_fkey FOREIGN KEY (helth_num) REFERENCES public.patients(health_num) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.bills
    ADD CONSTRAINT bills_p_id_fkey FOREIGN KEY (p_id) REFERENCES public.patients(p_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.bills
    ADD CONSTRAINT bills_recieptionist_fkey FOREIGN KEY (recieptionist) REFERENCES public.recieptionists(r_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.history
    ADD CONSTRAINT history_doctors_fkey FOREIGN KEY (doctors) REFERENCES public.doctors(d_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.history
    ADD CONSTRAINT history_patients_fkey FOREIGN KEY (patients) REFERENCES public.patients(p_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.orders_token
    ADD CONSTRAINT orders_token_p_id_fkey FOREIGN KEY (p_id) REFERENCES public.patients(p_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
