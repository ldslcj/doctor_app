# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Appointment.destroy_all
Doctor.destroy_all
Patient.destroy_all

d1 = Doctor.create(name:'Dr George', practice:'family', rating:4.5)
d2 = Doctor.create(name:'Dr Udall', practice:'Heart', rating:3.5)
d3 = Doctor.create(name:'Dr Z', practice:'brain', rating:4.6)

p1 = Patient.create(name:"Jimbo dubo")
p2 = Patient.create(name:"John wrigth")
p3 = Patient.create(name:"Sally Sal")

a1 = Appointment.create(doctor_id: d1.id, patient_id: p1.id, date: DateTime.now + 3)
Appointment.create(doctor_id: d1.id, patient_id: p1.id, date: DateTime.now + 5)
Appointment.create(doctor_id: d1.id, patient_id: p1.id, date: DateTime.now + 6)
Appointment.create(doctor_id: d1.id, patient_id: p2.id, date: DateTime.now + 1)
Appointment.create(doctor_id: d2.id, patient_id: p1.id, date: DateTime.now + 2)
Appointment.create(doctor_id: d2.id, patient_id: p3.id, date: DateTime.now + 7)

d1.appointments.create(patient_id: p1.id, date: DateTime.now + 2)

puts d1.patients
puts a1.doctor
puts a1.patient

