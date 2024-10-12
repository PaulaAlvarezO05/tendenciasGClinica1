# Generated by Django 5.1 on 2024-10-01 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Patients',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=100, verbose_name='First Name')),
                ('lastName', models.CharField(max_length=100, verbose_name='Last name')),
                ('email', models.CharField(max_length=100, verbose_name='Email')),
                ('phone', models.CharField(max_length=10, verbose_name='Phone')),
                ('birthDate', models.DateField(verbose_name='Birth Date')),
                ('address', models.CharField(max_length=50, verbose_name='Address')),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], default='M', max_length=2, verbose_name='Gender')),
                ('emergency_contact', models.CharField(max_length=50, verbose_name='Emergency Contact')),
                ('emergency_contact_phone', models.CharField(default='000-000-0000', max_length=20, verbose_name='Emergency Contact Phone')),
                ('insurance_entity', models.CharField(max_length=50, verbose_name='Insurance')),
                ('policy_number', models.CharField(default='0000000000', max_length=20, verbose_name='Policy Number')),
                ('Policy_state', models.BooleanField(default=False)),
                ('policy_validity', models.DateField(default='0001-01-01', verbose_name='policy_validity')),
                ('Cedula', models.CharField(default='0000000000', max_length=10, verbose_name='Cedula')),
            ],
            options={
                'verbose_name': 'Patient',
                'verbose_name_plural': 'Patients',
            },
        ),
    ]
