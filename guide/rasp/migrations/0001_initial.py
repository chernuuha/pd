# Generated by Django 4.2 on 2023-05-12 16:09

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pair',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sbj', models.CharField(max_length=100)),
                ('teacher', models.CharField(max_length=256)),
                ('df', models.DateField()),
                ('dt', models.DateField()),
                ('shortRooms', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=50), blank=True, default=list, size=None)),
                ('location', models.CharField(max_length=100)),
                ('type', models.CharField(max_length=50)),
                ('day', models.CharField(max_length=2)),
            ],
        ),
    ]
