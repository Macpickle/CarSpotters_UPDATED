from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import Account

class RegisterForm(UserCreationForm):
    username = forms.CharField(max_length=25, required=True, help_text='Required. 25 characters or fewer.')
    email = forms.EmailField(max_length=254, required=True, help_text='Required. Enter a valid email address.')
    password1 = forms.CharField(max_length=25, required=True, help_text='Required. Enter a password.')
    password2 = forms.CharField(max_length=25, required=True, help_text='Required. Passwords do not match.')

    class Meta:
        model = Account
        fields = ('username', 'email', 'password1', 'password2')

