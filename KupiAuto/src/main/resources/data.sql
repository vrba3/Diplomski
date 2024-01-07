delete from users where id!=0;
delete from cars where id!=0;
delete from registrations where id!=0;

insert into users (id, address, city, country, email,first_name,last_name,mobile_number,password)
values (1, 'Veljka Petrovica 1', 'Novi Sad', 'Srbija', 'milang@gmail.com', 'Milan', 'Govedarica', 123123123, 'aaaa');
insert into users (id, address, city, country, email,first_name,last_name,mobile_number,password)
values (2, 'Balzakova 2', 'Beograd', 'Srbija', 'mile@gmail.com', 'Miodrag', 'Prod', 111222333, 'aaaa');
insert into users (id, address, city, country, email, first_name, last_name, mobile_number, password)
values (3, 'Gogoljeva 2', 'Foca', 'Bosna', 'vrbica.vlado11@gmail.com', 'Vladimir', 'Vrbica', 064456456, 'aaaa');
insert into users (id, address, city, country, email, first_name, last_name, mobile_number, password)
values (4, 'Jevrejska 4', 'Sarajevo', 'FBiH', 'vesnakundacina@gmail.com', 'Vesna', 'Kundacina', 065189898, 'aaaa');
insert into users (id, address, city, country, email, first_name, last_name, mobile_number, password)
values (5, 'Futoska 5', 'Skoplje', 'Makedonija', 'makedonac@gmail.com', 'Zoran', 'Puric', 060124785, 'aaaa');
insert into users (id, address, city, country, email, first_name, last_name, mobile_number, password)
values (6, 'Jevrejska 6', 'Podgorica', 'Crna Gora', 'crnogorac@gmail.com', 'Boban', 'Rajovic', 065741963, 'aaaa');

insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (1, 'Opel', 'Astra', 1900, 55, 3000, 2000, 'Gasoline', 180000, null, 'Manual', null, 'top', 'milang@gmail.com', 'WWWZZZ1KBHFK124', FALSE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (2, 'Audi', 'A6', 1900, 125, 20000, 2015, 'Diesel', 160000, null, 'Automatic', null, 'ekstra', 'vesnakundacina@gmail.com', '214ZZ1KGDŠSFK124', TRUE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (3, 'Hyundai', 'i30', 1400, 74, 8900, 2016, 'Gasoline', 20000, null, 'Manual', null, 'top', 'milang@gmail.com', 'AHEAXZ1KBHSFK994', TRUE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (4, 'BMW', 'X5', 3000, 147, 30000, 2016, 'Diesel', 172500, null, 'Automatic', null, 'top', 'vesnakundacina@gmail.com', 'UOOFAS1KBHSFKFAS', TRUE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (5, 'Volkswagen', 'Golf 5', 1900, 80, 3400, 2005, 'Diesel', 196000, null, 'Manual', null, 'top', 'crnogorac@gmail.com', 'WSSSSZZ1KB15GAAF4', FALSE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (6, 'Volkswagen', 'Golf 6', 1200, 80, 6700, 2011, 'Gasoline', 180000, null, 'Manual', null, 'top', 'crnogorac@gmail.com', 'GARTVA1KBHSK224', TRUE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (7, 'Volkswagen', 'Passat B8', 2000, 110, 24000, 2018, 'Diesel', 130000, null, 'Automatic', null, 'top', 'crnogorac@gmail.com', 'WASFAZ1KS125251', TRUE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (8, 'Renault', 'Megane', 1600, 74, 10000, 2017, 'Gasoline', 220000, null, 'Manual', null, 'top', 'makedonac@gmail.com', 'ŠŠĐSAZZ1GAGSA24', FALSE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (9, 'Citroen', 'C5', 2000, 96, 7800, 2012, 'Gasoline', 180000, null, 'Manual', null, 'top', 'makedonac@gmail.com', 'ĆĆASFZ1KBHSFKOO4', FALSE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (10, 'Ford', 'Focus', 1600, 74, 2500, 1999, 'Gasoline', 240000, null, 'Manual', null, 'top', 'makedonac@gmail.com', 'WWĆĆĆZ1KB3DS1974', TRUE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (11, 'Ford', 'Fiesta', 1200, 66, 9790, 2018, 'Gasoline', 50000, null, 'Manual', null, 'top', 'mile@gmail.com', 'PPPCCC1KBHSFK125', TRUE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (12, 'Fiat', 'Tipo', 1900, 85, 10000, 2019, 'Gasoline', 180000, null, 'Manual', null, 'top', 'mile@gmail.com', 'OOOWWW1KBHS024', TRUE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (13, 'Fiat', 'Punto', 1900, 55, 2750, 2000, 'TNG', 260000, null, 'Manual', null, 'top', 'mile@gmail.com', 'UUUZVZ1LLLSAFK124', TRUE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (14, 'Mercedes Benz', 'G 500', 4000, 184, 76000, 2020, 'Diesel', 3, null, 'Automatic', null, 'top', 'vrbica.vlado11@gmail.com', '88AGASGA125BBB', FALSE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (15, 'Hyundai', 'Elantra', 1900, 96, 13200, 2017, 'Diesel', 40000, null, 'Manual', null, 'top', 'vrbica.vlado11@gmail.com', 'WWWAAA1LKKKK124', TRUE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (16, 'Hyundai', 'Tucson', 1900, 96, 14000, 2016, 'Diesel', 70000, null, 'Manual', null, 'top', 'vrbica.vlado11@gmail.com', 'IIIUZZ1KSFAFK124', TRUE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (17, 'Volkswagen', 'Arteon', 1900, 110, 26000, 2021, 'Diesel', 1000, null, 'Automatic', null, 'top', 'vrbica.vlado11@gmail.com', 'AGGZ1KBDGAS124', TRUE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (18, 'Peugeot', '508', 1900, 85, 27000, 2020, 'Hybrid', 180000, null, 'Manual', null, 'top', 'vrbica.vlado11@gmail.com', 'WWGASG1KBHS1514', TRUE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (19, 'BMW', 'i3', 1000, 55, 26000, 2020, 'Electric', 180000, null, 'Manual', null, 'top', 'milang@gmail.com', 'WGASGZ1KHSUU215', TRUE);
insert into cars (id, brand, model, cubic_capacity, num_of_kw, price, year_of_production, fuel, num_of_kilometers, images, transmission, equipment, description, owners_email, num_of_chassis, approved)
values (20, 'Peugeot', '307', 1500, 74, 3000, 2000, 'Gasoline', 180000, null, 'Manual', null, 'top', 'milang@gmail.com', 'UZJSZZ1KBHSFK004', TRUE);

insert into registrations (id, registration_number, registration_expiring_date, car_id, owners_email)
values (1, 'SU128II', '15.5.2024.', 4, 'vesnakundacina@gmail.com');
insert into registrations (id, registration_number, registration_expiring_date, car_id, owners_email)
values (2, 'NS028JJ', '15.6.2024.', 2, 'vesnakundacina@gmail.com');
insert into registrations (id, registration_number, registration_expiring_date, car_id, owners_email)
values (3, 'SO128CC', '15.7.2024.', 8, 'makedonac@gmail.com');
insert into registrations (id, registration_number, registration_expiring_date, car_id, owners_email)
values (4, 'VS152HH', '15.8.2024.', 5, 'crnogorac@gmail.com');
insert into registrations (id, registration_number, registration_expiring_date, car_id, owners_email)
values (5, 'BG666BG', '15.9.2024.', 12, 'mile@gmail.com');
insert into registrations (id, registration_number, registration_expiring_date, car_id, owners_email)
values (6, 'ZR678UJ', '15.10.2024.', 1, 'milang@gmail.com');
insert into registrations (id, registration_number, registration_expiring_date, car_id, owners_email)
values (7, 'BT666CC', '15.11.2024.', 20, 'milang@gmail.com');
insert into registrations (id, registration_number, registration_expiring_date, car_id, owners_email)
values (8, 'SU228ZI', '15.12.2024.', 14, 'vrbica.vlado11@gmail.com');
insert into registrations (id, registration_number, registration_expiring_date, car_id, owners_email)
values (9, 'SU927PI', '22.7.2024.', 9, 'makedonac@gmail.com');
insert into registrations (id, registration_number, registration_expiring_date, car_id, owners_email)
values (10, 'SO118RI', '11.3.2024.', 10, 'makedonac@gmail.com');

