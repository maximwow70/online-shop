/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main;

import Else.Helper;
import com.google.gson.Gson;
import entity.Item;
import hibernate.HibernateUtil;
import hibernate.ItemDAO;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Set;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import trash.ItemDataPresentation;

/**
 *
 * @author admin
 */
@WebServlet(name = "SearchItemList", urlPatterns = {"/SearchItemList"})
public class SearchItemList extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet SearchItemList</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet SearchItemList at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String name = "";
        Gson gson = new Gson();
        int[] colors = gson.fromJson(request.getParameter("colors"), int[].class);
        int[] sizes = gson.fromJson(request.getParameter("sizes"), int[].class);
        int min = Integer.valueOf(request.getParameter("minCost"));
        int max = Integer.valueOf(request.getParameter("maxCost"));
        int currentPage = Integer.valueOf(request.getParameter("currentPage"));
        int range = Integer.valueOf(request.getParameter("range"));
        ItemDAO itemDAO = new ItemDAO(HibernateUtil.getSessionFactory().openSession());
        List<Item> items = itemDAO.getItemList(name, min, max, colors, sizes, currentPage, range);
        Long countOfPages = itemDAO.getItemsCount(name, min, max, colors, sizes)/range;
        itemDAO.close();
        response.getWriter().write("{ items="+items.toString()+", pages="+countOfPages+"}");
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
