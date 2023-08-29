import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class CreateUserDto {

    // name: string;
    // lastname: string;
    // surname: string;
    // dateBirth: string;
    // speciality: string;
    // phoneNumber: string;
    // city: string;
    // balance: string;
    // // documentAttachments: string[];
    // password: string;

    @ApiProperty({example: 'Иван', description: 'Имя'})
    @IsString({message: 'Поле должно быть строкой'})
    @Length(1, 25, {message: 'Не меньше 1 и не больше 25'})
    readonly name: string;

    @ApiProperty({example: 'Иванов', description: 'Фамилия'})
    @IsString({message: 'Поле должно быть строкой'})
    @Length(1, 30, {message: 'Не меньше 1 и не больше 30'})
    readonly lastname: string;

    @ApiProperty({example: 'Иванович', description: 'Отчество'})
    @IsString({message: 'Поле должно быть строкой'})
    @Length(1, 30, {message: 'Не меньше 1 и не больше 30'})
    readonly surname: string;

    @ApiProperty({example: '01.01.2000', description: 'Дата рождения'})
    @IsString({message: 'Поле должно быть строкой'})
    @Length(10, 10, {message: 'Не меньше 10 и не больше 10 символов'})
    readonly dateBirth: string;

    @ApiProperty({example: 'Матрос', description: 'Специальность'})
    @IsString({message: 'Поле должно быть строкой'})
    @Length(3, 50, {message: 'Не меньше 3 и не больше 50 символов'})
    readonly speciality: string;
    
    @ApiProperty({example: '+79999999999', description: 'Номер телефона'})
    @IsString({message: 'Поле должно быть строкой'})
    @Length(12, 12, {message: 'Не меньше 12 и не больше 12 символов'})
    readonly phoneNumber: string;

    @ApiProperty({example: 'Владивосток', description: 'Город присутсвия'})
    @IsString({message: 'Поле должно быть строкой'})
    @Length(1, 35, {message: 'Не меньше 1 и не больше 35 символов'})
    readonly city: string;

    @ApiProperty({example: '100', description: 'Баланс'})
    readonly balance: string;

    @ApiProperty({example: '123456789', description: 'Пароль'})
    @IsString({message: 'Поле должно быть строкой'})
    @Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
    readonly password: string;
}
