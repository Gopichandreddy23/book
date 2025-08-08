import React, { useState } from 'react';

const DjangoPractice = () => {
  // State for active topic
  const [activeTopic, setActiveTopic] = useState('models');
  
  // State for showing/hiding solutions
  const [showSolutions, setShowSolutions] = useState({});
  
  // State for code examples visibility
  const [showCodeExamples, setShowCodeExamples] = useState({});
  
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Django topics and questions
  const topics = {
    models: {
      name: "Models & ORM",
      questions: [
        {
          id: 1,
          question: "Create a Django model for a Blog Post with title, content, author, and publication date",
          difficulty: "Beginner",
          solutionHint: "Use CharField for title, TextField for content, ForeignKey for author, and DateTimeField for publication date",
          codeExample: `from django.db import models
from django.contrib.auth.models import User

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    published_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title`
        },
        {
          id: 2,
          question: "Implement a model with a custom manager that only returns active objects",
          difficulty: "Intermediate",
          solutionHint: "Create a custom manager with a method that filters by an 'is_active' field",
          codeExample: `from django.db import models

class ActiveManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_active=True)

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=True)
    
    objects = models.Manager()  # Default manager
    active = ActiveManager()    # Custom manager
    
    def __str__(self):
        return self.name`
        },
        {
          id: 3,
          question: "Create a model with a FileField that validates file extensions",
          difficulty: "Intermediate",
          solutionHint: "Use FileField with a custom validator function",
          codeExample: `from django.db import models
from django.core.exceptions import ValidationError

def validate_file_extension(value):
    if not value.name.endswith('.pdf'):
        raise ValidationError('Only PDF files are allowed.')

class Document(models.Model):
    title = models.CharField(max_length=100)
    file = models.FileField(upload_to='documents/', validators=[validate_file_extension])
    uploaded_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title`
        },
        {
          id: 4,
          question: "Implement a many-to-many relationship with additional fields on the through model",
          difficulty: "Intermediate",
          solutionHint: "Create an intermediate model for the many-to-many relationship",
          codeExample: `from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Course(models.Model):
    title = models.CharField(max_length=100)
    students = models.ManyToManyField(Student, through='Enrollment')
    
    def __str__(self):
        return self.title

class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    date_enrolled = models.DateField(auto_now_add=True)
    grade = models.CharField(max_length=2, blank=True, null=True)
    
    class Meta:
        unique_together = [['student', 'course']]`
        },
        {
          id: 5,
          question: "Create a model with a property that calculates a value from other fields",
          difficulty: "Beginner",
          solutionHint: "Use the @property decorator to create a calculated field",
          codeExample: `from django.db import models

class Order(models.Model):
    quantity = models.PositiveIntegerField()
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    
    @property
    def total_price(self):
        return self.quantity * self.unit_price
    
    def __str__(self):
        return f"Order #{self.id}"`
        },
        {
          id: 6,
          question: "Implement model inheritance using abstract base classes",
          difficulty: "Intermediate",
          solutionHint: "Create an abstract model with abstract=True in Meta class",
          codeExample: `from django.db import models

class BaseContent(models.Model):
    title = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    
    class Meta:
        abstract = True

class Article(BaseContent):
    body = models.TextField()
    published = models.BooleanField(default=False)

class Video(BaseContent):
    url = models.URLField()
    duration = models.PositiveIntegerField()`
        },
        {
          id: 7,
          question: "Create a model with a custom save() method that performs validation",
          difficulty: "Intermediate",
          solutionHint: "Override the save() method and call full_clean() before saving",
          codeExample: `from django.db import models
from django.core.exceptions import ValidationError

class Event(models.Model):
    name = models.CharField(max_length=100)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    
    def clean(self):
        if self.end_date <= self.start_date:
            raise ValidationError("End date must be after start date")
    
    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.name`
        },
        {
          id: 8,
          question: "Implement a model with a custom database table name",
          difficulty: "Beginner",
          solutionHint: "Use the db_table attribute in the model's Meta class",
          codeExample: `from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    
    class Meta:
        db_table = 'custom_customer_table'
    
    def __str__(self):
        return self.name`
        },
        {
          id: 9,
          question: "Create a model with a custom ordering",
          difficulty: "Beginner",
          solutionHint: "Use the ordering attribute in the model's Meta class",
          codeExample: `from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    published_year = models.PositiveIntegerField()
    
    class Meta:
        ordering = ['-published_year', 'title']
    
    def __str__(self):
        return f"{self.title} by {self.author}"`
        },
        {
          id: 10,
          question: "Implement a model with a complex query using Q objects",
          difficulty: "Advanced",
          solutionHint: "Use Q objects to combine complex queries with OR conditions",
          codeExample: `from django.db import models
from django.db.models import Q

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50)
    in_stock = models.BooleanField(default=True)
    
    @classmethod
    def get_featured_products(cls):
        return cls.objects.filter(
            Q(price__lt=100) | Q(category='electronics'),
            in_stock=True
        ).order_by('price')
    
    def __str__(self):
        return self.name`
        }
      ]
    },
    views: {
      name: "Views & URLs",
      questions: [
        {
          id: 1,
          question: "Create a class-based view that displays a list of blog posts",
          difficulty: "Beginner",
          solutionHint: "Use ListView and specify the model and template name",
          codeExample: `from django.views.generic import ListView
from .models import BlogPost

class BlogPostListView(ListView):
    model = BlogPost
    template_name = 'blog/post_list.html'
    context_object_name = 'posts'
    ordering = ['-published_date']`
        },
        {
          id: 2,
          question: "Implement a view that handles both GET and POST requests for a contact form",
          difficulty: "Intermediate",
          solutionHint: "Use a function-based view with request.method checking",
          codeExample: `from django.shortcuts import render, redirect
from .forms import ContactForm

def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('contact_success')
    else:
        form = ContactForm()
    
    return render(request, 'contact/form.html', {'form': form})`
        },
        {
          id: 3,
          question: "Create a view that requires login and redirects to a custom URL",
          difficulty: "Beginner",
          solutionHint: "Use the @login_required decorator with login_url parameter",
          codeExample: `from django.contrib.auth.decorators import login_required
from django.shortcuts import render

@login_required(login_url='/accounts/login/')
def dashboard(request):
    return render(request, 'dashboard.html')`
        },
        {
          id: 4,
          question: "Implement a view that returns JSON response using Django's JsonResponse",
          difficulty: "Beginner",
          solutionHint: "Use JsonResponse to return data in JSON format",
          codeExample: `from django.http import JsonResponse
from .models import Product

def product_api(request):
    products = Product.objects.all().values('id', 'name', 'price')
    return JsonResponse(list(products), safe=False)`
        },
        {
          id: 5,
          question: "Create a view that handles file uploads",
          difficulty: "Intermediate",
          solutionHint: "Check request.FILES for uploaded files and save to a model",
          codeExample: `from django.shortcuts import render, redirect
from .forms import DocumentForm

def upload_file(request):
    if request.method == 'POST':
        form = DocumentForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('file_list')
    else:
        form = DocumentForm()
    
    return render(request, 'upload.html', {'form': form})`
        },
        {
          id: 6,
          question: "Implement a view with pagination for a large queryset",
          difficulty: "Intermediate",
          solutionHint: "Use Django's Paginator class or ListView's paginate_by",
          codeExample: `from django.core.paginator import Paginator
from django.shortcuts import render
from .models import Product

def product_list(request):
    product_list = Product.objects.all()
    paginator = Paginator(product_list, 25)  // Show 25 products per page
    
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    return render(request, 'products/list.html', {'page_obj': page_obj})`
        },
        {
          id: 7,
          question: "Create a view that uses Django's messages framework",
          difficulty: "Beginner",
          solutionHint: "Import messages from django.contrib and use add_message()",
          codeExample: `from django.contrib import messages
from django.shortcuts import redirect

def update_profile(request):
    // Process form data...
    messages.success(request, 'Your profile was updated successfully!')
    messages.warning(request, 'Your subscription expires soon!')
    return redirect('profile')`
        },
        {
          id: 8,
          question: "Implement a view that restricts access based on user permissions",
          difficulty: "Intermediate",
          solutionHint: "Use the @permission_required decorator or UserPassesTestMixin",
          codeExample: `from django.contrib.auth.decorators import permission_required
from django.shortcuts import render

@permission_required('app.delete_post', raise_exception=True)
def delete_post(request, post_id):
    // Delete post logic
    return render(request, 'post_deleted.html')`
        },
        {
          id: 9,
          question: "Create a view that handles AJAX requests and returns JSON",
          difficulty: "Intermediate",
          solutionHint: "Check request.is_ajax() and return JsonResponse",
          codeExample: `from django.http import JsonResponse
from django.views.decorators.http import require_GET

@require_GET
def search_api(request):
    query = request.GET.get('q', '')
    results = Product.objects.filter(name__icontains=query).values('id', 'name')
    return JsonResponse({'results': list(results)})`
        },
        {
          id: 10,
          question: "Implement a view with dynamic URL routing using path converters",
          difficulty: "Intermediate",
          solutionHint: "Use path converters in urls.py and capture parameters in the view",
          codeExample: `// urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('products/<int:pk>/', views.product_detail, name='product_detail'),
    path('articles/<slug:slug>/', views.article_detail, name='article_detail'),
]

// views.py
from django.shortcuts import get_object_or_404, render
from .models import Product, Article

def product_detail(request, pk):
    product = get_object_or_404(Product, pk=pk)
    return render(request, 'products/detail.html', {'product': product})

def article_detail(request, slug):
    article = get_object_or_404(Article, slug=slug)
    return render(request, 'articles/detail.html', {'article': article})`
        }
      ]
    },
    templates: {
      name: "Templates & Forms",
      questions: [
        {
          id: 1,
          question: "Create a template that extends a base template and overrides a block",
          difficulty: "Beginner",
          solutionHint: "Use {% extends %} and {% block %} tags",
          codeExample: `{# base.html #}
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}My Site{% endblock %}</title>
</head>
<body>
    {% block content %}{% endblock %}
</body>
</html>

{# home.html #}
{% extends "base.html" %}

{% block title %}Home Page{% endblock %}

{% block content %}
<h1>Welcome to my site</h1>
<p>This is the home page content.</p>
{% endblock %}`
        },
        {
          id: 2,
          question: "Implement a template filter that formats dates in a custom way",
          difficulty: "Intermediate",
          solutionHint: "Create a custom template filter using register.filter",
          codeExample: `# templatetags/custom_filters.py
from django import template
from datetime import datetime

register = template.Library()

@register.filter
def custom_date_format(value):
    if isinstance(value, datetime):
        return value.strftime("%a, %b %d, '%y")
    return value

{# In template #}
{% load custom_filters %}
{{ post.published_date|custom_date_format }}`
        },
        {
          id: 3,
          question: "Create a form with custom validation for a password field",
          difficulty: "Intermediate",
          solutionHint: "Override the clean() method in the form",
          codeExample: `from django import forms
from django.core.exceptions import ValidationError

class SignUpForm(forms.Form):
    username = forms.CharField(max_length=100)
    password = forms.CharField(widget=forms.PasswordInput)
    confirm_password = forms.CharField(widget=forms.PasswordInput)
    
    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        confirm_password = cleaned_data.get('confirm_password')
        
        if password and confirm_password and password != confirm_password:
            raise ValidationError("Passwords don't match")
        
        if len(password) < 8:
            raise ValidationError("Password must be at least 8 characters long")
        
        return cleaned_data`
        },
        {
          id: 4,
          question: "Implement a template tag that includes another template with context",
          difficulty: "Advanced",
          solutionHint: "Create an inclusion tag using register.inclusion_tag",
          codeExample: `# templatetags/nav_tags.py
from django import template
from ..models import Category

register = template.Library()

@register.inclusion_tag('includes/nav.html')
def show_categories():
    categories = Category.objects.all()
    return {'categories': categories}

{# In template #}
{% load nav_tags %}
{% show_categories %}

{# includes/nav.html #}
<nav>
    <ul>
        {% for category in categories %}
        <li><a href="{{ category.get_absolute_url }}">{{ category.name }}</a></li>
        {% endfor %}
    </ul>
</nav>`
        },
        {
          id: 5,
          question: "Create a ModelForm with custom widgets and field options",
          difficulty: "Intermediate",
          solutionHint: "Use widgets in the Meta class and customize fields",
          codeExample: `from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content', 'publish_date']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'content': forms.Textarea(attrs={'class': 'form-control', 'rows': 5}),
            'publish_date': forms.DateInput(attrs={'type': 'date', 'class': 'form-control'}),
        }
        labels = {
            'publish_date': 'Publication Date',
        }
        help_texts = {
            'content': 'Enter the full content of your post',
        }`
        },
        {
          id: 6,
          question: "Implement a template that displays paginated results",
          difficulty: "Intermediate",
          solutionHint: "Use the paginator object's methods in the template",
        },
        {
          id: 7,
          question: "Create a form that handles file uploads with validation",
          difficulty: "Intermediate",
          solutionHint: "Use FileField and handle request.FILES in the view",
          codeExample: `from django import forms

class UploadForm(forms.Form):
    title = forms.CharField(max_length=100)
    file = forms.FileField()
    
    def clean_file(self):
        file = self.cleaned_data.get('file')
        if file:
            if file.size > 10 * 1024 * 1024:  // 10MB limit
                raise forms.ValidationError("File too large (max 10MB)")
            if not file.name.endswith('.pdf'):
                raise forms.ValidationError("Only PDF files are allowed")
        return file`
        },
        {
          id: 8,
          question: "Implement a template that shows messages from Django's messages framework",
          difficulty: "Beginner",
          solutionHint: "Use the messages template tags to display messages",
          codeExample: `{# In your template #}
{% if messages %}
<ul class="messages">
    {% for message in messages %}
    <li{% if message.tags %} class="{{ message.tags }}"{% endif %}>
        {{ message }}
    </li>
    {% endfor %}
</ul>
{% endif %}`
        },
        {
          id: 9,
          question: "Create a custom template context processor",
          difficulty: "Advanced",
          solutionHint: "Create a function that returns a dictionary and add it to TEMPLATES context_processors",
          codeExample: `# myapp/context_processors.py
from django.conf import settings

def site_info(request):
    return {
        'SITE_NAME': settings.SITE_NAME,
        'SITE_URL': settings.SITE_URL,
    }

# In settings.py
TEMPLATES = [
    {
        // ...
        'OPTIONS': {
            'context_processors': [
                // ...
                'myapp.context_processors.site_info',
            ],
        },
    },
]

{# Now available in all templates #}
<footer>
    &copy; {{ SITE_NAME }} - {{ SITE_URL }}
</footer>`
        },
        {
          id: 10,
          question: "Implement a form with dynamic field choices from a database query",
          difficulty: "Intermediate",
          solutionHint: "Override the __init__ method and set choices dynamically",
          codeExample: `from django import forms
from .models import Category

class ProductForm(forms.Form):
    name = forms.CharField(max_length=100)
    price = forms.DecimalField(max_digits=10, decimal_places=2)
    category = forms.ChoiceField(choices=[])
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['category'].choices = [
            (cat.id, cat.name) for cat in Category.objects.all()
        ]`
        }
      ]
    },
    rest: {
      name: "REST Framework",
      questions: [
        {
          id: 1,
          question: "Create a basic API endpoint using Django REST framework's ModelViewSet",
          difficulty: "Beginner",
          solutionHint: "Create a serializer and viewset for your model",
          codeExample: `from rest_framework import viewsets, serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description']

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# urls.py
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)

urlpatterns = router.urls`
        },
        {
          id: 2,
          question: "Implement custom permission classes for API endpoints",
          difficulty: "Intermediate",
          solutionHint: "Create a custom permission class extending BasePermission",
          codeExample: `from rest_framework.permissions import BasePermission

class IsOwnerOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in ['GET', 'HEAD', 'OPTIONS']:
            return True
        return obj.owner == request.user

# In your view
class ProductDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsOwnerOrReadOnly]`
        },
        {
          id: 3,
          question: "Create a nested serializer for related models",
          difficulty: "Intermediate",
          solutionHint: "Use serializer relations like PrimaryKeyRelatedField or nested serializers",
          codeExample: `from rest_framework import serializers
from .models import Author, Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'published_date']

class AuthorSerializer(serializers.ModelSerializer):
    books = BookSerializer(many=True, read_only=True)
    
    class Meta:
        model = Author
        fields = ['id', 'name', 'email', 'books']`
        },
        {
          id: 4,
          question: "Implement pagination in a DRF API view",
          difficulty: "Intermediate",
          solutionHint: "Use DRF's pagination classes and settings",
          codeExample: `# settings.py
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20
}

# Or in a specific view
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class CustomPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = CustomPagination`
        },
        {
          id: 5,
          question: "Create an API endpoint with JWT authentication",
          difficulty: "Intermediate",
          solutionHint: "Use SimpleJWT package and configure authentication classes",
          codeExample: `# settings.py
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}

# urls.py
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # your other API endpoints
]

# In a protected view
from rest_framework.permissions import IsAuthenticated

class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        return Response({"message": "This is a protected view"})`
        },
        {
          id: 6,
          question: "Implement filtering and searching in a DRF API",
          difficulty: "Intermediate",
          solutionHint: "Use DjangoFilterBackend or SearchFilter",
          codeExample: `from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category', 'in_stock']
    search_fields = ['name', 'description']

# API will now support:
# /products/?category=electronics&in_stock=true
# /products/?search=laptop`
        },
        {
          id: 7,
          question: "Create a custom action in a DRF ViewSet",
          difficulty: "Intermediate",
          solutionHint: "Use the @action decorator on a method in your ViewSet",
          codeExample: `from rest_framework.decorators import action
from rest_framework.response import Response

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    @action(detail=True, methods=['post'])
    def activate(self, request, pk=None):
        product = self.get_object()
        product.is_active = True
        product.save()
        return Response({'status': 'activated'})
    
    @action(detail=False)
    def recent(self, request):
        recent_products = Product.objects.order_by('-created_at')[:5]
        serializer = self.get_serializer(recent_products, many=True)
        return Response(serializer.data)`
        },
        {
          id: 8,
          question: "Implement rate limiting for an API endpoint",
          difficulty: "Intermediate",
          solutionHint: "Use DRF's throttling classes",
          codeExample: `# settings.py
REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle'
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '100/day',
        'user': '1000/day'
    }
}

# Or for a specific view
from rest_framework.throttling import UserRateThrottle

class CustomThrottle(UserRateThrottle):
    rate = '10/minute'

class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    throttle_classes = [CustomThrottle]`
        },
        {
          id: 9,
          question: "Create a file upload API endpoint",
          difficulty: "Intermediate",
          solutionHint: "Use FileField in serializer and handle multipart form data",
          codeExample: `from rest_framework import serializers, viewsets
from .models import Document

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ['id', 'file', 'uploaded_at']

class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

# In settings.py make sure to have:
# 'DEFAULT_PARSER_CLASSES': [
#     'rest_framework.parsers.JSONParser',
#     'rest_framework.parsers.FormParser',
#     'rest_framework.parsers.MultiPartParser',
# ]`
        },
        {
          id: 10,
          question: "Implement versioning in a DRF API",
          difficulty: "Advanced",
          solutionHint: "Use DRF's versioning classes and URL path versioning",
          codeExample: `# settings.py
REST_FRAMEWORK = {
    'DEFAULT_VERSIONING_CLASS': 'rest_framework.versioning.URLPathVersioning',
    'DEFAULT_VERSION': 'v1',
    'ALLOWED_VERSIONS': ['v1', 'v2'],
}

# urls.py
urlpatterns = [
    path('<version>/products/', ProductListView.as_view(), name='products-list'),
]

# In your view
class ProductListView(APIView):
    def get(self, request, version):
        if version == 'v2':
            # Newer version logic
            products = Product.objects.all().values('id', 'name')
        else:
            # Original version logic
            products = Product.objects.all()
        
        return Response({'products': list(products)})`
        }
      ]
    },
    deployment: {
      name: "Deployment & Security",
      questions: [
        {
          id: 1,
          question: "Configure Django to use environment variables for sensitive settings",
          difficulty: "Intermediate",
          solutionHint: "Use python-dotenv or os.environ to read environment variables",
          codeExample: `# settings.py
import os
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = os.getenv('DJANGO_SECRET_KEY')
DEBUG = os.getenv('DEBUG') == 'True'
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DB_NAME'),
        'USER': os.getenv('DB_USER'),
        'PASSWORD': os.getenv('DB_PASSWORD'),
        'HOST': os.getenv('DB_HOST'),
        'PORT': os.getenv('DB_PORT'),
    }
}`
        },
        {
          id: 2,
          question: "Implement security middleware for production deployment",
          difficulty: "Intermediate",
          solutionHint: "Use Django's security middleware and settings",
          codeExample: `# settings.py
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_HSTS_SECONDS = 31536000  # 1 year
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')`
        },
        {
          id: 3,
          question: "Configure Django to serve static files in production",
          difficulty: "Intermediate",
          solutionHint: "Use WhiteNoise or a CDN for static files",
          codeExample: `# settings.py
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# Install WhiteNoise: pip install whitenoise
# middleware.py
MIDDLEWARE = [
    # ...
    'whitenoise.middleware.WhiteNoiseMiddleware',
    # ...
]

# For better compression
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'`
        },
        {
          id: 4,
          question: "Implement database connection pooling in Django",
          difficulty: "Advanced",
          solutionHint: "Use django-db-geventpool for PostgreSQL",
          codeExample: `# settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django_db_geventpool.backends.postgresql_psycopg2',
        'NAME': 'mydb',
        'USER': 'myuser',
        'PASSWORD': 'mypassword',
        'HOST': 'localhost',
        'PORT': '5432',
        'ATOMIC_REQUESTS': False,
        'CONN_MAX_AGE': 0,
        'OPTIONS': {
            'MAX_CONNS': 20,
            'REUSE_CONNS': 10
        }
    }
}`
        },
        {
          id: 5,
          question: "Configure Django for deployment with Docker",
          difficulty: "Intermediate",
          solutionHint: "Create Dockerfile and docker-compose.yml",
          codeExample: `# Dockerfile
FROM python:3.9-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "myproject.wsgi"]

# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DEBUG=False
      - DJANGO_SECRET_KEY=your-secret-key
    depends_on:
      - db

  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=myuser
      - POSTGRES_PASSWORD=mypassword
    volumes:
      - postgres_data:/var/lib/postgresql/data/

volumes:
  postgres_data:`
        },
        {
          id: 6,
          question: "Implement rate limiting to protect against brute force attacks",
          difficulty: "Intermediate",
          solutionHint: "Use django-ratelimit or Django REST framework's throttling",
          codeExample: `# Using django-ratelimit
from django_ratelimit.decorators import ratelimit

@ratelimit(key='ip', rate='5/m')
def login_view(request):
    if request.method == 'POST':
        # Login logic
        pass
    return render(request, 'login.html')

# Or with DRF
from rest_framework.throttling import AnonRateThrottle

class LoginView(APIView):
    throttle_classes = [AnonRateThrottle]
    
    def post(self, request):
        # Login logic
        pass`
        },
        {
          id: 7,
          question: "Configure Django with Celery for asynchronous tasks",
          difficulty: "Advanced",
          solutionHint: "Set up Celery with a message broker like Redis",
          codeExample: `# celery.py
import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')

app = Celery('myproject')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()

# settings.py
CELERY_BROKER_URL = 'redis://localhost:6379/0'
CELERY_RESULT_BACKEND = 'redis://localhost:6379/0'

# tasks.py
from celery import shared_task
from django.core.mail import send_mail

@shared_task
def send_welcome_email(user_email):
    send_mail(
        'Welcome to our site',
        'Thank you for registering!',
        'noreply@example.com',
        [user_email],
        fail_silently=False,
    )`
        },
        {
          id: 8,
          question: "Implement content security policy (CSP) headers in Django",
          difficulty: "Advanced",
          solutionHint: "Use django-csp middleware",
          codeExample: `# settings.py
MIDDLEWARE = [
    # ...
    'csp.middleware.CSPMiddleware',
    # ...
]

CSP_DEFAULT_SRC = ["'self'"]
CSP_SCRIPT_SRC = ["'self'", "'unsafe-inline'", "cdn.example.com"]
CSP_STYLE_SRC = ["'self'", "'unsafe-inline'"]
CSP_IMG_SRC = ["'self'", "data:", "cdn.example.com"]
CSP_FONT_SRC = ["'self'", "fonts.googleapis.com"]
CSP_CONNECT_SRC = ["'self'", "api.example.com"]`
        },
        {
          id: 9,
          question: "Configure Django for horizontal scaling with multiple servers",
          difficulty: "Advanced",
          solutionHint: "Use shared cache and database, and configure ALLOWED_HOSTS",
          codeExample: `# settings.py
ALLOWED_HOSTS = ['yourdomain.com', 'www.yourdomain.com', 'server1.yourdomain.com', 'server2.yourdomain.com']

# Shared cache
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache',
        'LOCATION': [
            'memcached1.yourdomain.com:11211',
            'memcached2.yourdomain.com:11211',
        ]
    }
}

# Database configuration for multiple servers
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'shared_db',
        'USER': 'db_user',
        'PASSWORD': 'db_password',
        'HOST': 'db.yourdomain.com',
        'PORT': '5432',
    }
}

# For session storage
SESSION_ENGINE = 'django.contrib.sessions.backends.cache'`
        },
        {
          id: 10,
          question: "Implement monitoring and logging for a Django production application",
          difficulty: "Advanced",
          solutionHint: "Use Sentry for error tracking and configure logging",
          codeExample: `# settings.py
import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration

sentry_sdk.init(
    dsn="YOUR_SENTRY_DSN",
    integrations=[DjangoIntegration()],
    traces_sample_rate=1.0,
    send_default_pii=True
)

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'file': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',
            'filename': '/var/log/django/debug.log',
        },
        'mail_admins': {
            'level': 'ERROR',
            'class': 'django.utils.log.AdminEmailHandler',
        }
    },
    'loggers': {
        'django': {
            'handlers': ['file', 'mail_admins'],
            'level': 'DEBUG',
            'propagate': True,
        },
    },
}`
        }
      ]
    }
  };

  // Filter questions based on search term
  const filteredQuestions = topics[activeTopic].questions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (q.solutionHint && q.solutionHint.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Toggle solution visibility
  const toggleSolution = (topic, id) => {
    setShowSolutions(prev => ({
      ...prev,
      [`${topic}-${id}`]: !prev[`${topic}-${id}`]
    }));
  };

  // Toggle code example visibility
  const toggleCodeExample = (topic, id) => {
    setShowCodeExamples(prev => ({
      ...prev,
      [`${topic}-${id}`]: !prev[`${topic}-${id}`]
    }));
  };

  return (
    <div className="django-practice-app">
      <header>
        <h1>Django Practice Questions</h1>
        
        <nav className="topic-nav">
          {Object.keys(topics).map(topic => (
            <button 
              key={topic}
              className={activeTopic === topic ? 'active' : ''}
              onClick={() => setActiveTopic(topic)}
            >
              {topics[topic].name}
            </button>
          ))}
        </nav>
        
        <div className="search-container">
          <input
            type="text"
            placeholder={`Search ${topics[activeTopic].name} questions...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button 
              className="clear-search"
              onClick={() => setSearchTerm('')}
            >
              Clear
            </button>
          )}
        </div>
      </header>

      <main>
        <div className="questions-container">
          <h2>{topics[activeTopic].name} Questions ({filteredQuestions.length})</h2>
          
          {filteredQuestions.length === 0 ? (
            <div className="no-results">No questions match your search criteria.</div>
          ) : (
            <ul className="questions-list">
              {filteredQuestions.map(q => {
                const questionKey = `${activeTopic}-${q.id}`;
                
                return (
                  <li 
                    key={q.id} 
                    className="question-card"
                  >
                    <div className="question-header">
                      <div className="question-meta">
                        <span className="question-number">Question {q.id}</span>
                        <span className={`difficulty ${q.difficulty.toLowerCase()}`}>
                          {q.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <p className="question-text">{q.question}</p>
                    
                    <div className="question-actions">
                      <button 
                        className="solution-toggle"
                        onClick={() => toggleSolution(activeTopic, q.id)}
                      >
                        {showSolutions[questionKey] ? 'Hide Hint' : 'Show Hint'}
                      </button>
                      
                      {q.codeExample && (
                        <button 
                          className="code-toggle"
                          onClick={() => toggleCodeExample(activeTopic, q.id)}
                        >
                          {showCodeExamples[questionKey] ? 'Hide Code' : 'Show Code'}
                        </button>
                      )}
                    </div>
                    
                    {showSolutions[questionKey] && q.solutionHint && (
                      <div className="solution-hint">
                        <strong>Hint:</strong> {q.solutionHint}
                      </div>
                    )}
                    
                    {showCodeExamples[questionKey] && q.codeExample && (
                      <div className="code-example">
                        <strong>Code Example:</strong>
                        <pre>{q.codeExample}</pre>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </main>

      <style jsx>{`
        .django-practice-app {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }
        
        header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #eee;
        }
        
        h1 {
          color: #2c3e50;
          margin-bottom: 20px;
        }
        
        h2 {
          color: #3498db;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
        }
        
        .topic-nav {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        
        .topic-nav button {
          padding: 8px 15px;
          border: none;
          background-color: #f0f0f0;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s;
          font-size: 0.9em;
        }
        
        .topic-nav button:hover {
          background-color: #e0e0e0;
        }
        
        .topic-nav button.active {
          background-color: #3498db;
          color: white;
        }
        
        .search-container {
          margin: 20px auto;
          max-width: 500px;
          display: flex;
          gap: 10px;
        }
        
        .search-input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 1em;
        }
        
        .clear-search {
          padding: 0 15px;
          background-color: #e74c3c;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        
        .questions-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .question-card {
          background-color: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .question-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        
        .question-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .question-meta {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .question-number {
          font-weight: bold;
          color: #2c3e50;
        }
        
        .question-text {
          margin-bottom: 15px;
          line-height: 1.6;
        }
        
        .difficulty {
          padding: 3px 10px;
          border-radius: 15px;
          font-size: 0.8em;
          font-weight: bold;
          color: white;
        }
        
        .difficulty.beginner {
          background-color: #2ecc71;
        }
        
        .difficulty.intermediate {
          background-color: #f39c12;
        }
        
        .difficulty.advanced {
          background-color: #e74c3c;
        }
        
        .question-actions {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }
        
        .solution-toggle, .code-toggle {
          padding: 8px 15px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9em;
          transition: background-color 0.3s;
        }
        
        .solution-toggle {
          background-color: #3498db;
          color: white;
        }
        
        .solution-toggle:hover {
          background-color: #2980b9;
        }
        
        .code-toggle {
          background-color: #9b59b6;
          color: white;
        }
        
        .code-toggle:hover {
          background-color: #8e44ad;
        }
        
        .solution-hint, .code-example {
          margin-top: 15px;
          padding: 15px;
          background-color: #f8f9fa;
          border-radius: 4px;
          font-size: 0.95em;
          line-height: 1.6;
        }
        
        .solution-hint {
          border-left: 4px solid #3498db;
        }
        
        .code-example {
          border-left: 4px solid #9b59b6;
        }
        
        .code-example pre {
          white-space: pre-wrap;
          background-color: #2c3e50;
          color: #ecf0f1;
          padding: 10px;
          border-radius: 4px;
          overflow-x: auto;
        }
        
        .no-results {
          text-align: center;
          padding: 40px;
          color: #7f8c8d;
          font-style: italic;
        }
        
        @media (max-width: 768px) {
          .django-practice-app {
            padding: 15px;
          }
          
          .topic-nav button {
            padding: 6px 10px;
            font-size: 0.8em;
          }
          
          .question-actions {
            flex-direction: column;
          }
          
          .solution-toggle, .code-toggle {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default DjangoPractice;