package com.example.ISAproject.model;

public enum Role{

    Admin(Values.Admin), Pilot(Values.Pilot), Mechanic(Values.Mechanic), FlyController(Values.FlyController);

    Role(String value) {
        if (!this.name().equals(value))
            throw new IllegalArgumentException("Incorrect use of Role!");
    }

    public static class Values {
        public static final String Admin = "Admin";
        public static final String Pilot = "Pilot";
        public static final String Mechanic = "Mechanic";
        public static final String FlyController = "FlyController";
    }

}

