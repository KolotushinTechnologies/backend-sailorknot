import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class LoginUserDto {

    // phoneNumber: string;
    // password: string;
    
    @ApiProperty({example: '+79999999999', description: 'Номер телефона'})
    @IsString({message: 'Поле должно быть строкой'})
    @Length(12, 12, {message: 'Не меньше 12 и не больше 12 символов'})
    readonly phoneNumber: string;

    @ApiProperty({example: '123456789', description: 'Пароль'})
    @IsString({message: 'Поле должно быть строкой'})
    @Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
    readonly password: string;
}
