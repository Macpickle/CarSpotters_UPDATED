# Generated by Django 5.1.2 on 2024-10-25 21:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0007_remove_post_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
