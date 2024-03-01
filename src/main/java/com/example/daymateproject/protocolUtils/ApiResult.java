package com.example.daymateproject.protocolUtils;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class ApiResult<T> {

    private String message;
    private T result;


    public static <T> ApiResult<T> success() {
        return new ApiResult<>("SUCCESS", null);
    }

    public static <T> ApiResult<T> success(T result) {
        return new ApiResult<>("SUCCESS", result);
    }

    public static ApiResult<Void> error(String resultCode) {
        return new ApiResult<>(resultCode, null);
    }

}